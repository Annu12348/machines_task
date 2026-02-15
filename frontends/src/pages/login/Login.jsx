import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../../api/Auth";
import { useDispatch } from "react-redux";
import { setAdminUser } from "../../redux/reducer/AdminUserSlice";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const [formError, setFormError] = useState({});
  const [submitError, setSubmitError] = useState("");
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
  });

  const validate = (values) => {
    const errors = {};
    if (!values.email) {
      errors.email = "Email is required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
    ) {
      errors.email = "Invalid email address";
    }
    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 6) {
      errors.password = "Password must be at least 6 characters";
    }
    return errors;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputValue((prev) => ({
      ...prev,
      [name]: value,
    }));
    setFormError((prev) => ({
      ...prev,
      [name]: undefined,
    }));
    setSubmitError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitError("");
    const errors = validate(inputValue);
    if (Object.keys(errors).length > 0) {
      setFormError(errors);
      return;
    }
    setLoading(true);
    try {
      const { data } = await login(inputValue);
      if (data && data.result && data.result._id) {
        dispatch(setAdminUser(data.result));
        setSuccess(true);
        navigate("/");
      } else if (data?.message) {
        setSubmitError(data.message || "Login failed. Please try again.");
      } else {
        setSubmitError("Login failed. Please try again.");
      }
    } catch (error) {
      if (error?.response?.data?.message) {
        setSubmitError(error.response.data.message);
      } else if (error?.message) {
        setSubmitError(error.message);
      } else {
        setSubmitError("Login failed. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-full bg-zinc-200 flex items-center justify-center p-4 sm:p-6">
      <div className="w-full max-w-md md:max-w-4xl bg-white rounded-3xl overflow-hidden grid grid-cols-1 md:grid-cols-5 shadow-lg min-h-[550px]">
        <div className="p-6 flex flex-col justify-center col-span-1 md:col-span-2">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-800 mb-3">Admin Login</h1>
          <p className="text-slate-500 mb-8 text-base">
            Welcome back! Please login to your admin account
          </p>
          <form className="space-y-5" onSubmit={handleSubmit} noValidate>
            <div>
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={inputValue.email}
                onChange={handleInputChange}
                className={`w-full px-4 py-3 rounded-lg border ${
                  formError.email ? "border-red-500" : "border-slate-300"
                } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                autoComplete="email"
              />
              {formError.email && (
                <p className="text-red-600 text-sm mt-1">{formError.email}</p>
              )}
            </div>
            <div>
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={inputValue.password}
                onChange={handleInputChange}
                className={`w-full px-4 py-3 rounded-lg border ${
                  formError.password ? "border-red-500" : "border-slate-300"
                } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                autoComplete="current-password"
              />
              {formError.password && (
                <p className="text-red-600 text-sm mt-1">{formError.password}</p>
              )}
            </div>
            {submitError && (
              <div className="text-red-600 text-center text-sm">{submitError}</div>
            )}
            {success && (
              <div className="text-green-600 text-center text-sm">
                Login successful! Redirecting...
              </div>
            )}
            <button
              type="submit"
              className="w-full py-3 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition duration-300 disabled:opacity-60"
              disabled={loading}
            >
              {loading ? "Logging In..." : "Login"}
            </button>
          </form>
          <p className="text-sm text-slate-500 mt-6 text-center">
            Don&apos;t have an account?{" "}
            <Link
              className="text-blue-600 font-medium cursor-pointer hover:underline"
            >
              Signup
            </Link>
          </p>
        </div>
        <div className="hidden md:flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100 p-6 md:p-10 md:col-span-3">
          <div className="text-center">
            <img
              src="https://cdn-icons-png.flaticon.com/512/9068/9068671.png"
              alt="Admin Illustration"
              className="w-40 md:w-72 mx-auto mb-6"
            />
            <h2 className="text-xl md:text-2xl font-bold text-slate-800">
              Manage Employees & Tasks{" "}
              <span className="text-green-600">Efficiently</span>
            </h2>
            <p className="text-slate-500 mt-3 text-base">
              Organize your team’s work with ease.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
