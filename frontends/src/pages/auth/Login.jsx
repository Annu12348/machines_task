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

  const handleGoogleLogin = () => {
    const isLocalhost = window.location.hostname === "localhost";
    if (isLocalhost) {
      window.location.href = "http://localhost:5000/api/admin/google/login";
    } else {
      window.location.href = "https://machines-task-backend.onrender.com/api/admin/google/login";
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
          <form className="space-y-3" onSubmit={handleSubmit} noValidate>
            <div>
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={inputValue.email}
                onChange={handleInputChange}
                className={`w-full px-4 py-3 rounded-lg border ${formError.email ? "border-red-500" : "border-slate-300"
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
                className={`w-full px-4 py-3 rounded-lg border ${formError.password ? "border-red-500" : "border-slate-300"
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
            <Link
            to='/forget-password'
             className="text-blue-500 capitalize font-semibold text-right block ">
              forget password
            </Link>
            <button
              type="submit"
              className="w-full py-3 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
              disabled={loading}
            >
              {loading ? "Logging In..." : "Login"}
            </button>
            <div className="flex items-center ">
              <div className="flex-grow border-t border-slate-300"></div>
              <span className="px-3 text-slate-400 text-sm">or</span>
              <div className="flex-grow border-t border-slate-300"></div>
            </div>
            <button
              type="button"
              onClick={handleGoogleLogin}
              className="w-full py-3 rounded-lg border border-zinc-300 text-black font-semibold bg-white hover:bg-red-600 hover:text-white transition-colors duration-300 flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              <svg className="w-5 h-5" viewBox="0 0 48 48"><g><path fill="#4285F4" d="M43.6 20.5h-1.9V20H24v8h11.3c-1.6 4.3-5.6 7-10.3 7-6.1 0-11-4.9-11-11s4.9-11 11-11c2.6 0 5 .9 6.8 2.4l6.4-6.4C35.4 6.7 30 4.5 24 4.5c-10.6 0-19.2 8.6-19.2 19.2s8.6 19.2 19.2 19.2c9.2 0 17.3-6.5 19-15V20.5z"></path><path fill="#34A853" d="M6.3 14.6l6.6 4.8C14.2 16 18.8 12.5 24 12.5c2.6 0 5 .9 6.8 2.4l6.4-6.4C35.4 6.7 30 4.5 24 4.5c-7.1 0-13.4 4.1-16.4 10.1z"></path><path fill="#FBBC05" d="M24 44.9c6.6 0 12.2-2.2 16.3-5.9l-7.5-6.1c-2.2 1.6-5 2.5-8.8 2.5-4.7 0-8.7-2.7-10.3-7h-7.6v4.4c3 6 9.3 10.1 16.4 10.1z"></path><path fill="#EA4335" d="M43.6 20.5h-1.9V20H24v8h11.3c-.7 2-.7 4 0 6h6.9c1.3-2.5 2.1-5.8 2.1-9C44.2 23.8 43.6 22.1 43.6 20.5z"></path></g></svg>
              Continue Login with Google
            </button>
          </form>
          <p className="text-sm text-slate-500 mt-6 text-center">
            Don&apos;t have an account?{" "}
            <Link
              to='/register'
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
