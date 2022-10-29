import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import News from "./News";
import Contact from "./Contact";
export default function ReactRouter() {
  return (
    <>
      <div>ReactRouter</div>
      <nav>
        <ul>
          <li>
            <Link to="/">home</Link>
          </li>{" "}
          <li>
            <Link to="/news">news</Link>
          </li>{" "}
          <li>
            <Link to="contact">contact</Link>
          </li>{" "}
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news" element={<News />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </>
  );
}
