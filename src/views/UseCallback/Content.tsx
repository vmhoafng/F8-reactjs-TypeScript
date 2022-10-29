import { memo } from "react";

function Content({ onIncrease }: any) {
  console.log("re-render");

  return (
    <>
      <h1>Hello anh em F8</h1>
      <button onClick={onIncrease}>Click me!</button>
    </>
  );
}

export default memo(Content);
