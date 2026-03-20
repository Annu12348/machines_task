import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { singleEmployee, updateEmployee } from "../../api/Employee";

const UpdateEmployee = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    department: "",
    status: "Active",
    _id: "",
  });

  const [formError, setFormError] = useState({});
  const [submitError, setSubmitError] = useState("");
  const [loading, setLoading] = useState(false);

  const validate = (values) => {
    const errors = {};
    if (!values.name) errors.name = "Name is required";
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
    if (!values.department) errors.department = "Department is required";
    if (values.status && !["Active", "Inactive"].includes(values.status)) {
      errors.status = "Status must be Active or Inactive";
    }
    return errors;
  };

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    setFormError((prev) => ({
      ...prev,
      [e.target.name]: undefined,
    }));
    setSubmitError("");
  };

  const fetchEmployee = async () => {
    try {
      setLoading(true);
      const response = await singleEmployee(id);
      const data = response.data?.result ?? response.data;
      if (data) {
        setFormData({
          name: data.name || "",
          email: data.email || "",
          phone: data.phone || "",
          department: data.department || "",
          status: data.status || "Active",
          _id: data._id || id,
        });
      }
    } catch (error) {
      setSubmitError(error?.response?.data?.message || "Fetch Error");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (id) fetchEmployee();
  }, [id]);

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
      await updateEmployee(formData);
      navigate("/admin/employees");
    } catch (error) {
      setSubmitError(
        error?.response?.data?.message || error?.message || "Update Failed"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-purple-100 p-4 sm:p-6 md:p-10 flex items-center justify-center">
      <div className="bg-white rounded-2xl shadow-xl p-4 sm:p-6 md:p-10 w-full max-w-2xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-700 mb-6 sm:mb-8 text-center">Update Employee</h2>
        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6" noValidate>
          <div>
            <label className="block mb-2 text-gray-600 font-medium">Full Name</label>
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
            <label className="block mb-2 text-gray-600 font-medium">Email Address</label>
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
            <label className="block mb-2 text-gray-600 font-medium">Phone Number</label>
            <input
              type="tel"
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
            <label className="block mb-2 text-gray-600 font-medium">Department</label>
            <input
              type="text"
              name="department"
              placeholder="Enter department"
              value={formData.department}
              onChange={handleChange}
              required
              className={`w-full px-3 sm:px-4 py-2 sm:py-3 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none ${
                formError.department ? "border-red-500" : ""
              }`}
            />
            {formError.department && (
              <p className="text-red-600 text-sm mt-1">{formError.department}</p>
            )}
          </div>
          <div>
            <label className="block mb-2 text-gray-600 font-medium">Status</label>
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
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded mb-2">
              {submitError}
            </div>
          )}

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-3">
            <button
              type="submit"
              disabled={loading}
              className="bg-blue-600 text-white px-4 sm:px-6 py-2 rounded-lg hover:bg-blue-700 transition font-semibold"
            >
              {loading ? "Updating..." : "Update"}
            </button>
            <button
              type="button"
              onClick={() => navigate("/admin/employees")}
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

export default UpdateEmployee;
