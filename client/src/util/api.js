import axios from "axios";
import { toast } from "react-toastify";

export const api = axios.create({
  baseURL: "http://localhost:8000/api",
});

export const getAllTasks = async () => {
  try {
    const response = await api.get("/task/getAllTasks", { timeout: 10 * 1000 });
    if (response.data === 400 || response.data === 500) {
      throw response.data;
    }
    return response.data;
  } catch (err) {
    toast.error("Failed to fetch tasks");
    throw err;
  }
};

export const createTask = async (data) => {
  try {
    const response = await api.post("/task/createTask", data, {
      timeout: 10 * 1000,
    });
    if (response.data === 400 || response.data === 500) {
      throw response.data;
    }
    return response.data;
  } catch (err) {
    toast.error("Failed to create task");
    throw err;
  }
};

export const deleteTask = async (id) => {
  try {
    const response = await api.delete(`/task/deleteTask/${id}`, {
      timeout: 10 * 1000,
    });
    if (response.data === 400 || response.data === 500) {
      throw response.data;
    }
    return response.data;
  } catch (err) {
    toast.error("Failed to delete task");
    throw err;
  }
};

export const updateTask = async (id, data) => {
  try {
    const response = await api.post(`/task/updateTask/${id}`, data, {
      timeout: 10 * 1000,
    });
    if (response.data === 400 || response.data === 500) {
      throw response.data;
    }
    return response.data;
  } catch (err) {
    toast.error("Failed to update task");
    throw err;
  }
};
