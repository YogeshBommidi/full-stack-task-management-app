import asyncHandler from "express-async-handler";
import { prisma } from "../prismaConfig.js";

// Creating a Task
export const createTask = asyncHandler(async (req, res) => {
  console.log("Creating a task...");
  const { title, description } = req.body;

  if (!title || !description) {
    return res
      .status(400)
      .json({ message: "Title and Description are required" });
  }

  try {
    const task = await prisma.task.create({
      data: {
        title,
        description,
      },
    });
    res.status(201).json({ message: "Task Created Successfully", task });
  } catch (err) {
    console.error("Error while creating task:", err.message);
    res
      .status(500)
      .json({ message: "Internal Server Error", error: err.message });
  }
});

// Get All Tasks
export const getAllTasks = asyncHandler(async (req, res) => {
  console.log("Fetching all tasks...");
  try {
    const tasks = await prisma.task.findMany({
      orderBy: {
        title: "asc",
      },
    });
    res.status(200).json(tasks);
  } catch (err) {
    console.error("Error fetching tasks:", err.message);
    res
      .status(500)
      .json({ message: "Internal Server Error", error: err.message });
  }
});

// Deleting a Task
export const deleteTask = asyncHandler(async (req, res) => {
  console.log("Deleting a task...");
  const { id } = req.params;

  try {
    const task = await prisma.task.findUnique({
      where: { id },
    });
    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }

    await prisma.task.delete({
      where: {
        id,
      },
    });
    res.status(200).json({ message: "Deleted Task Successfully" });
  } catch (err) {
    console.error("Error deleting task:", err.message);
    res
      .status(500)
      .json({ message: "Internal Server Error", error: err.message });
  }
});

// Updating a Task
export const updateTask = asyncHandler(async (req, res) => {
  console.log("Updating a task...");
  const { id } = req.params;
  const { title, description, status } = req.body;

  if (!title && !description && status === undefined) {
    return res
      .status(400)
      .json({
        message:
          "At least one field (title, description, or status) is required",
      });
  }

  try {
    const task = await prisma.task.findUnique({
      where: { id },
    });
    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }

    const updatedTask = await prisma.task.update({
      where: { id },
      data: {
        title,
        description,
        status,
      },
    });
    res
      .status(200)
      .json({ message: "Updated Task Successfully", task: updatedTask });
  } catch (err) {
    console.error("Error updating task:", err.message);
    res
      .status(500)
      .json({ message: "Internal Server Error", error: err.message });
  }
});
