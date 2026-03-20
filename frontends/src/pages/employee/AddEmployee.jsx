import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createEmployee } from "../../api/Employee";
import { addEmployees } from "../../redux/reducer/EmployeeSlice";
import { useDispatch } from "react-redux";

const AddEmployee = () => {
  const navigate = useNavigate();
  const [formError, setFormError] = useState({});
  const [submitError, setSubmitError] = useState("");
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    department: "",
    status: "Active",
  });

  const validate = (values) => {
    const errors = {};
    if (!values.name) {
      errors.name = "Name is required";
    }
    if (!values.email) {
      errors.email = "Email is required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
    ) {
      errors.email = "Invalid email format";
    }
    if (!values.phone) {
      errors.phone = "Phone number is required";
    } else if (!/^\d{10,15}$/.test(values.phone)) {
      errors.phone = "Phone must be between 10 to 15 digits";
    }
    if (!values.department) {
      errors.department = "Department is required";
    }
    if (
      values.status &&
      !["Active", "Inactive"].includes(values.status)
    ) {
      errors.status = "Status must be Active or Inactive";
    }
    return errors;
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setFormError((prev) => ({
      ...prev,
      [e.target.name]: undefined,
    }));
    setSubmitError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitError("");
    const errors = validate(formData);
    if (Object.keys(errors).length > 0) {
      setFormError(errors);
      return;
    }
    setLoading(true);
    try {
      const { data } = await createEmployee(formData);
      if (data && (data._id || data.result?._id)) {
        dispatch(addEmployees(data._id ? data : data.result));
        setSuccess(true);
        navigate("/admin/employees");
      } else if (data?.message) {
        setSubmitError(data.message);
      } else {
        setSubmitError("Failed to add employee. Please try again.");
      }
    } catch (error) {
      if (error?.response?.data?.message) {
        setSubmitError(error.response.data.message);
      } else if (error?.message) {
        setSubmitError(error.message);
      } else {
        setSubmitError("Failed to add employee. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-purple-100 px-2 py-6 sm:p-6 md:p-10 flex items-center justify-center">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-lg md:max-w-2xl mx-auto p-4 sm:p-6 md:p-10">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-700 mb-6 sm:mb-8 text-center">
          Add Employee
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6" noValidate>
          <div>
            <label className="block mb-2 text-gray-600 font-medium">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter full name"
              value={formData.name}
              onChange={handleChange}
              required
              className={`w-full px-3 sm:px-4 py-2 sm:py-3 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none ${
                formError.name ? "border-red-500" : ""
              }`}
            />
            {formError.name && (
              <p className="text-red-600 text-sm mt-1">{formError.name}</p>
            )}
          </div>
          <div>
            <label className="block mb-2 text-gray-600 font-medium">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter email"
              value={formData.email}
              onChange={handleChange}
              required
              className={`w-full px-3 sm:px-4 py-2 sm:py-3 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none ${
                formError.email ? "border-red-500" : ""
              }`}
            />
            {formError.email && (
              <p className="text-red-600 text-sm mt-1">{formError.email}</p>
            )}
          </div>
          <div>
            <label className="block mb-2 text-gray-600 font-medium">
              Phone
            </label>
            <input
              type="text"
              name="phone"
              placeholder="Enter phone number"
              value={formData.phone}
              onChange={handleChange}
              required
              className={`w-full px-3 sm:px-4 py-2 sm:py-3 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none ${
                formError.phone ? "border-red-500" : ""
              }`}
            />
            {formError.phone && (
              <p className="text-red-600 text-sm mt-1">{formError.phone}</p>
            )}
          </div>
          <div>
            <label className="block mb-2 text-gray-600 font-medium">
              Department
            </label>
            <select
              name="department"
              value={formData.department}
              onChange={handleChange}
              required
              className={`w-full px-3 sm:px-4 py-2 sm:py-3 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none ${
                formError.department ? "border-red-500" : ""
              }`}
            >
              <option value="">Select Department</option>
              <option value="Sales">Sales</option>
              <option value="HR">HR</option>
              <option value="IT">IT</option>
              <option value="Marketing">Marketing</option>
            </select>
            {formError.department && (
              <p className="text-red-600 text-sm mt-1">{formError.department}</p>
            )}
          </div>
          <div>
            <label className="block mb-2 text-gray-600 font-medium">
              Status
            </label>
            <select
              name="status"
              value={formData.status}
              onChange={handleChange}
              className={`w-full px-3 sm:px-4 py-2 sm:py-3 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none ${
                formError.status ? "border-red-500" : ""
              }`}
            >
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </select>
            {formError.status && (
              <p className="text-red-600 text-sm mt-1">{formError.status}</p>
            )}
          </div>
          {submitError && (
            <div className="text-red-600 text-center text-sm">{submitError}</div>
          )}
          {success && (
            <div className="text-green-600 text-center text-sm">
              Employee added successfully! Redirecting...
            </div>
          )}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-3">
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 sm:px-6 py-2 rounded-lg hover:bg-blue-700 transition font-semibold disabled:opacity-60"
              disabled={loading}
            >
              {loading ? "Saving..." : "Save"}
            </button>
            <button
              type="button"
              onClick={() => navigate("/admin/employees")}
              className="bg-gray-300 text-gray-700 px-4 sm:px-6 py-2 rounded-lg hover:bg-gray-400 transition font-semibold"
              disabled={loading}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddEmployee;
