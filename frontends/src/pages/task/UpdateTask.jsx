import { useEffect, useState } from "react";
import { readByIdTask, updateTask } from "../../api/Task";
import { useNavigate, useParams } from "react-router-dom";

const UpdateTask = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    assignedEmployee: "",
    priority: "Medium",
    deadline: "",
    status: "Pending",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const fetchTaskById = async () => {
    try {
      const response = await readByIdTask(id);
      if (response.data?.result) {
        const data = response.data.result;
        setFormData({
          title: data.title || "",
          description: data.description || "",
          assignedEmployee: data.assignedEmployee || "",
          priority: data.priority || "Medium",
          deadline: data.deadline ? data.deadline.slice(0, 10) : "",
          status: data.status || "Pending",
        });
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateTask(id, formData);
      navigate("/tasks");
    } catch (error) {
      console.log("Full Error:", error);
      console.log("Backend Error:", error.response?.data);
    }
  };

  useEffect(() => {
    if (id) {
      fetchTaskById();
    }
  }, [id]);

  return (
    <div className="min-h-screen bg-purple-100 p-4 sm:p-6 md:p-10 flex items-center justify-center">
      <div className="bg-white rounded-2xl shadow-xl p-4 sm:p-6 md:p-10 w-full max-w-2xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-700 mb-6 sm:mb-8 text-center">
          Update Task
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6" noValidate>
          <div>
            <label className="block mb-2 text-gray-600 font-medium">
              Title
            </label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Enter task title"
              className="w-full px-3 sm:px-4 py-2 sm:py-3 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
            />
          </div>
          <div>
            <label className="block mb-2 text-gray-600 font-medium">
              Description
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Enter task description"
              className="w-full px-3 sm:px-4 py-2 sm:py-3 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
              rows={3}
            />
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <label className="block mb-2 text-gray-600 font-medium">
                Priority
              </label>
              <select
                name="priority"
                value={formData.priority}
                onChange={handleChange}
                className="w-full px-3 sm:px-4 py-2 sm:py-3 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
              >
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
              </select>
            </div>
            <div className="flex-1">
              <label className="block mb-2 text-gray-600 font-medium">
                Deadline
              </label>
              <input
                type="date"
                name="deadline"
                value={formData.deadline}
                onChange={handleChange}
                className="w-full px-3 sm:px-4 py-2 sm:py-3 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
              />
            </div>
          </div>
          <div>
            <label className="block mb-2 text-gray-600 font-medium">
              Status
            </label>
            <select
              name="status"
              value={formData.status}
              onChange={handleChange}
              className="w-full px-3 sm:px-4 py-2 sm:py-3 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
            >
              <option value="Pending">Pending</option>
              <option value="In Progress">In Progress</option>
              <option value="Completed">Completed</option>
            </select>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-3">
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 sm:px-6 py-2 rounded-lg hover:bg-blue-700 transition font-semibold"
            >
              Update
            </button>

            <button
              type="button"
              onClick={() => navigate("/tasks")}
              className="bg-gray-300 text-gray-700 px-4 sm:px-6 py-2 rounded-lg hover:bg-gray-400 transition font-semibold"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateTask;
