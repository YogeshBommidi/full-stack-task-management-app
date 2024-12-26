import express from "express";
import {
  createTask,
  deleteTask,
  getAllTasks,
  updateTask,
} from "../controllers/taskControllers.js";

const router = express.Router();

router.post("/createTask", createTask);
router.get("/getAllTasks", getAllTasks);
router.delete("/deleteTask/:id", deleteTask);
router.post("/updateTask/:id", updateTask);

export { router as TaskRoute };
