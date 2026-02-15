import * as taskService from "../services/task.service.js";

export const taskCreateController = async (req, res) => {
  try {
    const { title, description, assignedEmployee, priority, deadline, status } = req.body;

    const task = await taskService.taskCreate({
      title,
      description,
      assignedEmployee,
      priority,
      deadline,
      status
    });

    res.status(201).json({
      message: "Task created successfully",
      result: task,
    });
  } catch (error) {
    res.status(error.statusCode || 500).json({
      message: error.message,
    });
  }
};

export const taskAllReadController = async (req, res) => {
  try {
    const tasks = await taskService.taskAllRead();

    res.status(200).json({
      message: "Tasks fetched successfully",
      result: tasks,
    });
  } catch (error) {
    res.status(error.statusCode || 500).json({
      message: error.message,
    });
  }
};

export const taskDeleteController = async (req, res) => {
  try {
    const taskId = req.params.id

    if (!taskId) {
      return res.status(400).json({
        message: "Task ID is required",
      });
    }

    const task = await taskService.taskDelete(taskId);

    res.status(200).json({ 
      message: "Task deleted successfully", 
      result: task 
    });

  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};



export const taskUpdateController = async (req, res) => {
  try {
    const taskId = req.params.id;
    const { title, description, assignedEmployee, priority, deadline, status } = req.body;

    if (!taskId) {
      return res.status(400).json({
        message: "Task ID is required",
      });
    }

    const task = await taskService.taskUpdate({
      taskId,
      title,
      description,
      assignedEmployee,
      priority,
      deadline,
      status,
    });

    res.status(200).json({
      message: "Task updated successfully",
      result: task,
    });
  } catch (error) {
    res.status(error.statusCode || 500).json({
      message: error.message,
    });
  }
};

export const taskReadByIdController = async (req, res) => {
  try {
    const taskId = req.params.id;

    if (!taskId) {
      return res.status(400).json({
        message: "Task ID is required",
      });
    }

    const task = await taskService.taskReadById(taskId);

    res.status(200).json({ 
      message: "Task fetched successfully", 
      result: task 
    });
  } catch (error) {
    res.status(error.statusCode || 500).json({
      message: error.message,
    });
  }
};