import React from "react";
import { useState } from "react";
import Todolist from "../UseState/Todolist";
export default function UseState() {
  const [state, setState] = useState<boolean>(false);
  const handleMounted = (): void => {
    setState(!state);
  };
  return (
    <>
      <div>UseState</div>
      <button onClick={handleMounted}>
        {!state ? "Mounted" : "Unmounted"}
      </button>
      {state && <Todolist />}
    </>
  );
}
