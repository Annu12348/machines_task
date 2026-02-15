import employeeModel from "../models/employee.model.js";
import taskModel from "../models/task.model.js";

export const taskCreate = async ({ title, description, assignedEmployee, priority, deadline, status }) => {
    const employee = await employeeModel.findById(assignedEmployee);

    if (!employee) {
        const error = new Error("Assigned employee not found");
        error.statusCode = 404
        throw error;
    }

    const task = await taskModel.create({
        title, description, assignedEmployee, priority, deadline, status
    });

    if (!task) {
        const error = new Error("Task creation failed");
        error.statusCode = 500;
        throw error;
    }

    return task;
};

export const taskAllRead = async () => {
    const tasks = taskModel.find().populate("assignedEmployee", "name email")
    .sort({ updatedAt: -1 }).lean();

    return tasks;
};

export const taskDelete = async (taskId) => {
    const tasks = await taskModel.findById(taskId);

    if (!tasks) {
        const error = new Error("Tasks not found");
        error.statusCode = 404;
        throw error;
    }

    const task = await taskModel.findByIdAndDelete(taskId);

    if (!task) {
        const error = new Error("Task not found or not deleted");
        error.statusCode = 404;
        throw error;
    }
    return task;
};

export const taskUpdate = async ({
    taskId,
    title,
    description,
    assignedEmployee,
    priority,
    deadline,
    status,
  }) => {
  
    const task = await taskModel.findById(taskId);
  
    if (!task) {
      const error = new Error("Task not found");
      error.statusCode = 404;
      throw error;
    }
  
    const updateData = {};
  
    if (title !== undefined) updateData.title = title;
    if (description !== undefined) updateData.description = description;
    if (priority !== undefined) updateData.priority = priority;
    if (deadline !== undefined) updateData.deadline = deadline;
    if (status !== undefined) updateData.status = status;
  
    if (assignedEmployee) {
      const employee = await employeeModel.findById(assignedEmployee);
      if (!employee) {
        const error = new Error("Assigned employee not found");
        error.statusCode = 404;
        throw error;
      }
      updateData.assignedEmployee = assignedEmployee;
    }
  
    const update = await taskModel.findByIdAndUpdate(
      taskId,
      updateData,
      { new: true }
    );
  
    return update;
  };
  
  

  export const taskReadById = async (taskId) => {
    const task = await taskModel.findById(taskId).populate("assignedEmployee", "name email");

    if (!task) {
        const error = new Error("Task not found");
        error.statusCode = 404;
        throw error;
    }

    return task;
  };