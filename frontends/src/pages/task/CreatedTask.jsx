import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createTask } from "../../api/Task";
import { addTasks } from "../../redux/reducer/TaskSlice";

const CreatedTask = () => {
  const navigate = useNavigate();
  const { employees } = useSelector((store) => store.Employeess);
  const [formError, setFormError] = useState({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    assignedEmployee: "",
    priority: "Medium",
    deadline: "",
    status: "Pending",
  });

  const validate = (values) => {
    const errors = {};
    if (!values.title) errors.title = "Title is required";
    if (!values.assignedEmployee) errors.assignedEmployee = "Select an employee";
    if (!["Low", "Medium", "High"].includes(values.priority))
      errors.priority = "Priority must be Low, Medium, or High";
    if (
      values.status &&
      !["Pending", "In Progress", "Completed"].includes(values.status)
    )
      errors.status = "Status must be Pending/In Progress/Completed";
    return errors;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setFormError((prev) => ({ ...prev, [e.target.name]: undefined }));
    setSubmitError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitError("");
    setSuccess(false);
    const errors = validate(formData);
    if (Object.keys(errors).length > 0) {
      setFormError(errors);
      return;
    }

    setLoading(true);
    try {
      const response = await createTask(formData);
      dispatch(addTasks(response.data.result));
      setSuccess(true);
      setFormData({
        title: "",
        description: "",
        assignedEmployee: "",
        priority: "Medium",
        deadline: "",
        status: "Pending",
      });
      setFormError({});
      navigate("/admin/tasks");
    } catch (error) {
      setSubmitError(
        error?.response?.data?.message || error.message || "Failed to create task."
      );
    } finally {
      setLoading(false);
    }
  };

  const employeeList = Array.isArray(employees) ? employees : [];

  return (
    <div className="min-h-screen bg-purple-100 p-4 sm:p-6 md:p-10 flex items-center justify-center">
      <div className="bg-white rounded-2xl shadow-xl p-4 sm:p-6 md:p-10 w-full max-w-2xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-700 mb-6 sm:mb-8 text-center">Add Task</h2>
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
              className={`w-full px-3 sm:px-4 py-2 sm:py-3 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none ${
                formError.title ? "border-red-500" : ""
              }`}
            />
            {formError.title && (
              <p className="text-red-600 text-sm mt-1">{formError.title}</p>
            )}
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
          <div>
            <label className="block mb-2 text-gray-600 font-medium">Assign Employee</label>
            <select
              name="assignedEmployee"
              value={formData.assignedEmployee}
              onChange={handleChange}
              className={`w-full px-3 sm:px-4 py-2 sm:py-3 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none ${
                formError.assignedEmployee ? "border-red-500" : ""
              }`}
            >
              <option value="">Select Employee</option>
              {employeeList.map((emp) => (
                <option key={emp._id} value={emp._id}>
                  {emp.name}
                </option>
              ))}
            </select>
            {formError.assignedEmployee && (
              <p className="text-red-600 text-sm mt-1">
                {formError.assignedEmployee}
              </p>
            )}
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
          {submitError && (
            <div className="text-red-600 text-center text-sm">{submitError}</div>
          )}
          {success && (
            <div className="text-green-600 text-center text-sm">
              Task created successfully!
            </div>
          )}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-3">
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 sm:px-6 py-2 rounded-lg hover:bg-blue-700 transition font-semibold"
              disabled={loading}
            >
              {loading ? "Saving..." : "Save"}
            </button>
            <button
              type="button"
              onClick={() => navigate("/admin/tasks")}
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

export default CreatedTask;
