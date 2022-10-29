import React from "react";
import { useState, useEffect } from "react";
export default function UseEffect() {
  const [title, setTitle] = useState("");
  const [posts, setPosts] = useState<[]>([]);
  useEffect(() => {
    document.title = title;
  });
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => setPosts(json));
  },[]);
  return (
    <div>
      UseEffect
      <div>
        <div>1 Update title </div>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div>
        2 Call API
        <ul>
          {posts.map((post: any) => {
            return <li key={post.id}>{post.title}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}
