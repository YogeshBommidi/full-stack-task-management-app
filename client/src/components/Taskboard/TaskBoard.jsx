import React, { useState } from "react";
import "./TaskBoard.css";
import { FaSearch } from "react-icons/fa";
import TaskCards from "../Task-Cards/TaskCards";
import { useQuery, useQueryClient } from "react-query";
import { BounceLoader, PuffLoader } from "react-spinners";
import { createTask, getAllTasks } from "../../util/api";
import { toast } from "react-toastify";
import OutsideClickHandler from "react-outside-click-handler";

const TaskBoard = () => {
  const queryClient = useQueryClient();
  const { data, isError, isLoading } = useQuery("tasks", getAllTasks);
  const [searchTerm, setSearchTerm] = useState("");
  const [addTask, setAddTask] = useState(false);
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDescription, setTaskDescription] = useState("");

  const handleAddTask = async () => {
    if (!taskTitle || !taskDescription) {
      toast.error("Title and Description are required");
      return;
    }
    await createTask({ title: taskTitle, description: taskDescription });
    setAddTask(false);
    queryClient.invalidateQueries("tasks"); // Refetch the tasks
  };

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
        <BounceLoader color="#73158c" />
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
          <button
            className="btn taskBoardTitleBtn"
            onClick={() => {
              setAddTask(!addTask);
            }}
          >
            + Add Task
          </button>
          {addTask ? (
            <div>
              <OutsideClickHandler
                onOutsideClick={() => {
                  setAddTask(false);
                }}
              >
                <div className="addTaskForm">
                  <div className="taskFormFields">
                    <span className="primaryText">Task Title</span>
                    <input
                      type="text"
                      className="inputField"
                      value={taskTitle}
                      onChange={(e) => setTaskTitle(e.target.value)}
                    />
                  </div>
                  <div className="taskFormFields">
                    <span className="primaryText"> Task Description</span>
                    <textarea
                      className="inputField descriptionInput"
                      value={taskDescription}
                      onChange={(e) => setTaskDescription(e.target.value)}
                    />
                  </div>
                  <button className="btn" onClick={handleAddTask}>
                    Add Task
                  </button>
                </div>
              </OutsideClickHandler>
            </div>
          ) : null}
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
          .filter(
            (task) =>
              task.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
              task.description.toLowerCase().includes(searchTerm.toLowerCase())
          )
          .map((cards, i) => (
            <TaskCards cards={cards} key={i} />
          ))}
      </div>
    </div>
  );
};

export default TaskBoard;
