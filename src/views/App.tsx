import React from "react";
import "../App.css";
import { Routes, Route, Link } from "react-router-dom";
import UseState from "./UseState/UseState";
import UseEffect from "./UseEffect/UseEffect";
import UseEffectWD from "./UseEffect/UseEffectWD";
import UseEffectDOM from "./UseEffect/UseEffectDOM";
import UseRef from "./UseRef/UseRef";
import UseCallback from "./UseCallback/UseCallback";
import UseMemo from "./UseMemo/UseMemo";
import UseReducerCounter from "./UseReducer/UseReducerCounter";
import UseReducerTodolist from "./UseReducer/UseReducerTodolist";
import ReactRouter from "./ReactRouter/ReactRouter";
function App() {
  return (
    <div className="App">
      <nav>
        <ul style={{ display: "flex", gap:"18px" }}>
          <li>
            <Link to="/UseState">UseState</Link>
          </li>{" "}
          <li>
            <Link to="/UseEffect">UseEffect</Link>
          </li>{" "}
          <li>
            <Link to="UseEffectWD">UseEffectWD</Link>
          </li>{" "}
          <li>
            <Link to="UseEffectDOM">UseEffectDOM</Link>
          </li>{" "}
          <li>
            <Link to="UseRef">UseRef</Link>
          </li>{" "}
          <li>
            <Link to="UseCallback">UseCallback</Link>
          </li>{" "}
          <li>
            <Link to="UseMemo">UseMemo</Link>
          </li>{" "}
          <li>
            <Link to="UseReducerTodolist">UseReducerTodolist</Link>
          </li>{" "}
        </ul>
      </nav>
      <Routes>
        <Route path="/UseState" element={<UseState />} />
        <Route path="/UseEffect" element={<UseEffect />} />
        <Route path="/UseEffectWD" element={<UseEffectWD />} />
        <Route path="/UseEffectDOM" element={<UseEffectDOM />} />
        <Route path="/UseRef" element={<UseRef />} />
        <Route path="/UseCallback" element={<UseCallback />} />
        <Route path="/UseMemo" element={<UseMemo />} />
        <Route path="/UseReducerTodolist" element={<UseReducerTodolist />} />
      </Routes>
      {/* <ReactRouter /> */}
    </div>
  );
}

export default App;
