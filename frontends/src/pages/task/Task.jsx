import React, { useEffect, useState } from "react";
import Navigation from "../../components/Navigation";
import { Link } from "react-router-dom";
import { allTask, deleteTask as deleteTaskApi } from "../../api/Task";
import { useDispatch, useSelector } from "react-redux";
import { removeTasks, setTasks } from "../../redux/reducer/TaskSlice";

const Task = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [deletingId, setDeletingId] = useState(null);
  const taskState = useSelector((store) => store.Taskss.tasks);

  const fetchTasks = async () => {
    setLoading(true);
    try {
      const response = await allTask();
      if (response && response.data && Array.isArray(response.data.result)) {
        dispatch(setTasks(response.data.result));
      } else if (Array.isArray(response?.data)) {
        dispatch(setTasks(response.data));
      } else {
        dispatch(setTasks([]));
      }
    } catch (error) {
      dispatch(setTasks([]));
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const handleDeleteTask = async (id) => {
    if (!id) return;
    setDeletingId(id);
    try {
      const response = await deleteTaskApi(id);
      if (
        (response?.data && response.data.success) ||
        response?.success ||
        response?.status === 200 ||
        response?.status === 204
      ) {
        dispatch(removeTasks(id));
      } else {
        await fetchTasks();
      }
    } catch (error) {
      await fetchTasks();
    } finally {
      setDeletingId(null);
    }
  };

  const getOriginalDate = (dateValue) => {
    if (!dateValue) return "-";
    if (/^\d{4}-\d{2}-\d{2}$/.test(dateValue)) return dateValue;
    const date = new Date(dateValue);
    if (isNaN(date.getTime())) return dateValue;
    return date.toISOString().slice(0, 10);
  };

  const taskList = Array.isArray(taskState) ? taskState : [];

  return (
    <div className="w-full min-h-screen bg-zinc-200 pb-2">
      <Navigation />
      <div className="bg-white rounded-2xl shadow p-5 xs:p-2 sm:p-4 md:p-8 max-w-7xl mx-auto my-6 xs:my-2 flex-1">
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-0 justify-between items-start sm:items-center mb-6">
          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-blue-900 mb-2 sm:mb-0">Tasks</h1>
          <Link
            to="/admin/tasks/create"
            className="bg-blue-700 text-white px-4 sm:px-5 py-2 font-semibold rounded-lg shadow hover:bg-blue-800 transition-all whitespace-nowrap"
          >
            Add Task
          </Link>
        </div>
        <div className="w-full">
          <div className="hidden md:block overflow-x-auto rounded-xl shadow-md">
            <table className="w-full text-left divide-y divide-blue-200 min-w-[700px]">
              <thead className="bg-blue-500 text-white">
                <tr>
                  <th className="py-4 px-4 font-semibold tracking-wide">#</th>
                  <th className="py-4 px-4 font-semibold tracking-wide">Title</th>
                  <th className="py-4 px-4 font-semibold tracking-wide">Assigned Employee</th>
                  <th className="py-4 px-4 font-semibold tracking-wide">Priority</th>
                  <th className="py-4 px-4 font-semibold tracking-wide">Deadline</th>
                  <th className="py-4 px-4 font-semibold tracking-wide">Status</th>
                  <th className="py-4 px-4 font-semibold tracking-wide">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-blue-100">
                {loading ? (
                  <tr>
                    <td colSpan={7} className="text-center py-12 text-blue-400 text-lg font-semibold tracking-widest">
                      Loading...
                    </td>
                  </tr>
                ) : taskList.length === 0 ? (
                  <tr>
                    <td colSpan={7} className="text-center py-12 text-gray-400 text-lg font-semibold tracking-widest">
                      No tasks found.
                    </td>
                  </tr>
                ) : (
                  taskList.map((task, idx) => {
                    const thisId = task._id || task.id || "";
                    return (
                      <tr
                        key={thisId || idx}
                        className={`transition-colors hover:bg-blue-50 ${idx % 2 === 1 ? "bg-blue-50/60" : ""}`}
                      >
                        <td className="py-4 px-4 text-gray-500">{idx + 1}</td>
                        <td className="py-4 px-4 font-medium text-blue-900">{task.title}</td>
                        <td className="py-4 px-4">
                          <span className="inline-flex items-center gap-2">
                            <svg
                              className="w-5 h-5 text-blue-400"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={1.5}
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M5.121 17.804A17.926 17.926 0 0112 16c2.424 0 4.744.433 6.879 1.804M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                              />
                            </svg>
                            {task.assignedEmployee?.name || task.employee?.name || "-"}
                          </span>
                        </td>
                        <td className="py-4 px-4 align-middle">
                          <span className="inline-block px-3 py-1 rounded-lg bg-purple-100 text-purple-600 font-medium text-sm shadow">
                            {task.priority}
                          </span>
                        </td>
                        <td className="py-4 px-4 align-middle">
                          <span className="text-sm font-mono text-gray-700 bg-slate-200 px-2 py-1 rounded">
                            {getOriginalDate(task.deadline)}
                          </span>
                        </td>
                        <td className="py-4 px-4">
                          <span
                            className={`inline-block px-3 py-1 rounded-full text-sm font-semibold shadow ${
                              task.status === "Completed"
                                ? "bg-green-200 text-green-700"
                                : task.status === "In Progress"
                                ? "bg-yellow-200 text-yellow-700"
                                : "bg-red-200 text-red-700"
                            }`}
                          >
                            {task.status}
                          </span>
                        </td>
                        <td className="py-4 px-4 flex gap-1 space-x-2">
                          <Link
                            to={`/admin/tasks/update/${task._id}`}
                            className="bg-blue-800 text-white px-4 py-1.5 rounded-full font-semibold shadow hover:scale-105 transition-transform flex items-center justify-center"
                            aria-label="Edit Task"
                          >
                            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path></svg>
                            Edit
                          </Link>
                          <button
                            className={`bg-red-600 text-white px-4 py-1.5 rounded-full font-semibold shadow flex items-center justify-center transition-transform ${
                              deletingId === thisId ? "opacity-60 cursor-not-allowed" : "hover:scale-105"
                            }`}
                            aria-label="Delete Task"
                            disabled={deletingId === thisId}
                            onClick={() => handleDeleteTask(thisId)}
                          >
                            {deletingId === thisId ? (
                              <svg className="animate-spin mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
                              </svg>
                            ) : (
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"></path></svg>
                            )}
                          </button>
                        </td>
                      </tr>
                    );
                  })
                )}
              </tbody>
            </table>
          </div>
          <div className="block md:hidden">
            {loading ? (
              <div className="text-center py-8 text-blue-400 text-base font-semibold tracking-widest">
                Loading...
              </div>
            ) : taskList.length === 0 ? (
              <div className="text-center py-10 text-gray-400 text-base font-semibold tracking-widest">
                No tasks found.
              </div>
            ) : (
              <div className="flex flex-col gap-4">
                {taskList.map((task, idx) => {
                  const thisId = task._id || task.id || "";
                  return (
                    <div
                      key={thisId || idx}
                      className="bg-white rounded-xl shadow px-4 py-3 flex flex-col gap-2 border border-blue-100 relative"
                    >
                      <div className="flex items-center justify-between">
                        <div className="font-bold text-blue-900 text-lg">
                          {idx + 1}. {task.title}
                        </div>
                        <div className="flex gap-1">
                          <Link
                            to={`/tasks/update/${task._id}`}
                            className="bg-blue-800 text-white px-3 py-1 rounded-full font-semibold shadow hover:scale-105 transition-transform flex items-center justify-center text-xs"
                            aria-label="Edit Task"
                          >
                            <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path></svg>
                            Edit
                          </Link>
                          <button
                            className={`bg-red-600 text-white px-3 py-1 rounded-full font-semibold shadow flex items-center justify-center transition-transform text-xs ${
                              deletingId === thisId ? "opacity-60 cursor-not-allowed" : "hover:scale-105"
                            }`}
                            aria-label="Delete Task"
                            disabled={deletingId === thisId}
                            onClick={() => handleDeleteTask(thisId)}
                          >
                            {deletingId === thisId ? (
                              <svg className="animate-spin mr-1 h-3 w-3 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
                              </svg>
                            ) : (
                              <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"></path></svg>
                            )}
                          </button>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-y-2 mt-2">
                        <div className="w-1/2 text-sm text-gray-500">
                          <span className="font-semibold text-gray-600">Assigned: </span>
                          {task.assignedEmployee?.name || task.employee?.name || "-"}
                        </div>
                        <div className="w-1/2 text-sm text-gray-500">
                          <span className="font-semibold text-gray-600">Priority: </span>
                          <span className="inline-block px-2 py-0.5 rounded bg-purple-100 text-purple-600 font-medium text-xs">
                            {task.priority}
                          </span>
                        </div>
                        <div className="w-1/2 text-sm text-gray-500">
                          <span className="font-semibold text-gray-600">Deadline: </span>
                          <span className="font-mono text-xs bg-slate-100 px-1 py-0.5 rounded">
                            {getOriginalDate(task.deadline)}
                          </span>
                        </div>
                        <div className="w-1/2 text-sm text-gray-500">
                          <span className="font-semibold text-gray-600">Status: </span>
                          <span className={`inline-block px-2 py-0.5 rounded-full text-xs font-semibold shadow ${
                            task.status === "Completed"
                              ? "bg-green-200 text-green-700"
                              : task.status === "In Progress"
                              ? "bg-yellow-200 text-yellow-700"
                              : "bg-red-200 text-red-700"
                          }`}>
                            {task.status}
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Task;
