import React from "react";
import { useState, useCallback } from "react";
import Content from "./Content";

export default function UseCallback() {
  <div>UseCallback</div>;

  const [count, setCount] = useState(0);

  const handleIncrease = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  return (
    <div className="App">
      <div>UseCallback</div>
      <Content onIncrease={handleIncrease} />
      <h1>{count}</h1>
    </div>
  );
}
