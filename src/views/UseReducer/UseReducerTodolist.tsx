import React, { useReducer, useRef } from "react";
import { reducer, initState } from "./Reducer";
import { ActionKind } from "./Actions";
export default function UseReducer() {
  const inputRef = useRef<null | HTMLInputElement>(null);
  // 4. Dispath: nhận vào action
  const [state, dispatch] = useReducer(reducer, initState);
  const { job, jobs } = state;
  return (
    <div>
      UseReducer
      <input
        ref={inputRef}
        type="text"
        value={job}
        onChange={(e) => {
          dispatch({ type: ActionKind.SET_JOB, payload: e.target.value });
        }}
      />
      <button
        onClick={() => {
          inputRef.current?.focus();
          dispatch({ type: ActionKind.ADD_JOB, payload: job });
        }}>
        Add
      </button>
      <ul
        style={{
          display: "flex",
          flexDirection: "column",
          listStyle: "none",
          width: "20%",
          margin: "auto",
          marginTop: "32px",
        }}>
        {jobs.map((job: string, index: number) => (
          <div
            key={index}
            style={{
              display: "flex",
              width: "100%",
              justifyContent: "space-between",
            }}>
            <li key={index + 1}>{job}</li>
            <button
              onClick={() => {
                dispatch({
                  type: ActionKind.DELETE_JOB,
                  payload: index.toString(),
                });
              }}
              key={index + 2}>
              &times;
            </button>
          </div>
        ))}
      </ul>
    </div>
  );
}
