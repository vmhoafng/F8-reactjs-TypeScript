import React, { useRef, useState } from "react";

export default function UseRef() {
  const [count, setCount] = useState(180);
  let id: { current: NodeJS.Timeout | null } = useRef(null);
  console.log(id.current);

  const handleStart = () => {
    id.current = setInterval(() => {
      setCount((count) => count - 1);
    }, 1000);
  };
  const handleStop = () => {
    clearInterval(id.current as NodeJS.Timeout);
  };
  return (
    <div>
      UseRef
      <p>{count}</p>
      <button onClick={handleStart}>start</button>
      <button onClick={handleStop}>stop</button>
    </div>
  );
}
