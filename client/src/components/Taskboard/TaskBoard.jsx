import React, { useState } from "react";
import "./TaskBoard.css";
import { FaSearch } from "react-icons/fa";
import TaskCards from "../Task-Cards/TaskCards";
import taskdata from "../../repo-data.json";

const TaskBoard = () => {
  const [searchTerm, setSearchTerm] = useState("");

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
        {taskdata
          .filter(
            (cards) =>
              cards.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
              cards.description.toLowerCase().includes(searchTerm.toLowerCase())
          )
          .map((cards, i) => (
            <TaskCards cards={cards} key={i} />
          ))}
      </div>
    </div>
  );
};

export default TaskBoard;
