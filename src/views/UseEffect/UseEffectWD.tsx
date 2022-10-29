import React from "react";
import { useState, useEffect } from "react";
export default function UseEffectWD() {
  const tabs = ["posts", "todos", "comments"];
  const [status, setStatus] = useState("posts");
  const [list, setList] = useState([]);
  const handleSetStatus = (status: string) => {
    setStatus(status);
  };
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${status}`)
      .then((response) => response.json())
      .then((json) => setList(json));
  }, [status]);
  return (
    <div>
      UseEffectWithDependencies
      <div>
        {" "}
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => {
              handleSetStatus(tab);
            }}>
            {tab}
          </button>
        ))}
      </div>
      <ul>
        {list.map((list: any, index) => (
          <li key={index}>{list.title || list.name}</li>
        ))}
      </ul>
    </div>
  );
}
