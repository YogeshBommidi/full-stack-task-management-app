import React, { useState } from "react";
import "./TaskBoard.css";
import { FaSearch } from "react-icons/fa";
import TaskCards from "../Task-Cards/TaskCards";
import useTasks from "../../Hooks/useTasks";
import { PuffLoader } from "react-spinners";

const TaskBoard = () => {
  const { data, isError, isLoading } = useTasks();
  const [searchTerm, setSearchTerm] = useState("");

  if (isError) {
    return (
      <div className="wrapper">
        <span>Error While Fetching the Market Data</span>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="loading-spinner">
        <PuffLoader
          height="80"
          width="80"
          radius={1}
          color="orange"
          aria-label="puff-loading"
        />
      </div>
    );
  }

  return (
    <div className="taskboardContainer">
      <div className="taskboardHeader">
        <div className="taskboardTitle">
          <div>
            <span className="primaryText">Tasks</span>
            <span className="secondaryText">08 Total Tasks</span>
          </div>
          <button className="btn">+ Add Task</button>
        </div>
        <div className="search-bar">
          <FaSearch />
          <input
            type="text"
            placeholder="Search Task"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>
      <div className="task-cards">
        {data
          .filter((task) => task.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            task.description.toLowerCase().includes(searchTerm.toLowerCase()))
          .map((cards, i) => (
            <TaskCards cards={cards} key={i} />
          ))}
      </div>
    </div>
  );
};

export default TaskBoard;
