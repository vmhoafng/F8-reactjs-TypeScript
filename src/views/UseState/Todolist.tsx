import React from "react";
import { useState } from "react";
export default function Todolist() {
  const storage: string[] = JSON.parse(localStorage.getItem("jobs") || "[]");
  const [job, setJob] = useState<string>("");
  const [jobs, setJobs] = useState<string[]>(storage);
  const handleAddJob = () => {
    setJobs((prev) => {
      const allJobs = [...prev, job];
      localStorage.setItem("jobs", JSON.stringify(allJobs));
      return allJobs;
    });
    setJob("");
  };
  const handleClearJob = () => {
    setJobs([]);
    localStorage.setItem("jobs", JSON.stringify([]));
  };
  return (
    <>
      <div>Todolist</div>
      <input type="text" value={job} onChange={(e) => setJob(e.target.value)} />
      <button onClick={handleAddJob}>Add</button>
      <button onClick={handleClearJob}>Clear</button>
      <ul>
        {jobs.map((job, index) => (
          <li key={index}>{job}</li>
        ))}
      </ul>
    </>
  );
}
