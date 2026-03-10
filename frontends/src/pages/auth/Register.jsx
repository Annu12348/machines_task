import React, { useState, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import { register } from "../../api/Auth";
import { useDispatch } from "react-redux";
import { setAdminUser } from "../../redux/reducer/AdminUserSlice";

const validateFields = ({ name, contact, email, password }) => {
  const errors = {};

  // Name validation
  if (!name.trim()) {
    errors.name = "Full name is required";
  } else if (name.length < 3) {
    errors.name = "Full name must be at least 3 characters";
  }

  // Contact validation
  if (!contact.trim()) {
    errors.contact = "Contact number is required";
  } else if (!/^\d{10,16}$/.test(contact)) {
    errors.contact = "Contact number must be between 10 and 16 digits";
  }

  // Email validation
  if (!email.trim()) {
    errors.email = "Email is required";
  } else if (
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)
  ) {
    errors.email = "Invalid email address";
  }

  // Password validation
  if (!password) {
    errors.password = "Password is required";
  } else if (password.length < 8) {
    errors.password = "Password must be at least 8 characters";
  } else if (!/[A-Z]/.test(password)) {
    errors.password = "Password must contain at least one uppercase letter";
  } else if (!/[a-z]/.test(password)) {
    errors.password = "Password must contain at least one lowercase letter";
  } else if (!/[\W_]/.test(password)) {
    errors.password = "Password must contain at least one special character";
  }
  return errors;
};

const Register = () => {
  const [loading, setLoading] = useState(false);
  const [formError, setFormError] = useState({});
  const [submitError, setSubmitError] = useState("");
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState({
    name: "",
    contact: "",
    email: "",
    password: "",
  });

  const handleInputChange = useCallback((e) => {
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
  }, []);

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      setSubmitError("");
      setSuccess(false);

      const errors = validateFields(inputValue);
      if (Object.keys(errors).length > 0) {
        setFormError(errors);
        return;
      }

      setLoading(true);
      try {
        const { data } = await register({
          name: inputValue.name.trim(),
          contact: inputValue.contact.trim(),
          email: inputValue.email.trim(),
          password: inputValue.password,
        });
        
          dispatch(setAdminUser(data.result));
          setSuccess(true);
          navigate("/login");
        
      } catch (error) {
        if (error?.response?.data?.message) {
          setSubmitError(error.response.data.message);
        } else if (error?.message) {
          setSubmitError(error.message);
        } else {
          setSubmitError("Registration failed. Please try again.");
        }
      } finally {
        setLoading(false);
      }
    },
    [inputValue, dispatch, navigate]
  );

  return (
    <div className="min-h-screen w-full bg-zinc-200 flex items-center justify-center p-4 sm:p-6">
      <div className="w-full  bg-white rounded-3xl overflow-hidden grid grid-cols-1 md:grid-cols-5 shadow-lg min-h-[550px]">
        <div className="p-6 flex flex-col justify-center col-span-1 md:col-span-2">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-800 mb-3">Admin Registration</h1>
          <p className="text-slate-500 mb-8 text-base">
            Create account to manage employees and tasks.
          </p>
          <form className="space-y-5" onSubmit={handleSubmit} noValidate autoComplete="off">
            <div>
              <label htmlFor="register-name" className="block text-sm font-medium text-slate-700 mb-1">
                Full Name <span className="text-red-600">*</span>
              </label>
              <input
                id="register-name"
                type="text"
                name="name"
                placeholder="Full Name"
                value={inputValue.name}
                onChange={handleInputChange}
                className={`w-full px-4 py-3 rounded-lg border ${
                  formError.name ? "border-red-500" : "border-slate-300"
                } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                autoComplete="name"
                required
              />
              {formError.name && (
                <p className="text-red-600 text-sm mt-1">{formError.name}</p>
              )}
            </div>
            <div>
              <label htmlFor="register-contact" className="block text-sm font-medium text-slate-700 mb-1">
                Contact Number <span className="text-red-600">*</span>
              </label>
              <input
                id="register-contact"
                type="text"
                name="contact"
                placeholder="Contact Number"
                value={inputValue.contact}
                onChange={handleInputChange}
                className={`w-full px-4 py-3 rounded-lg border ${
                  formError.contact ? "border-red-500" : "border-slate-300"
                } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                autoComplete="tel"
                required
                pattern="\d{8,16}"
              />
              {formError.contact && (
                <p className="text-red-600 text-sm mt-1">{formError.contact}</p>
              )}
            </div>
            <div>
              <label htmlFor="register-email" className="block text-sm font-medium text-slate-700 mb-1">
                Email <span className="text-red-600">*</span>
              </label>
              <input
                id="register-email"
                type="email"
                name="email"
                placeholder="Email Address"
                value={inputValue.email}
                onChange={handleInputChange}
                className={`w-full px-4 py-3 rounded-lg border ${
                  formError.email ? "border-red-500" : "border-slate-300"
                } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                autoComplete="email"
                required
              />
              {formError.email && (
                <p className="text-red-600 text-sm mt-1">{formError.email}</p>
              )}
            </div>
            <div>
              <label htmlFor="register-password" className="block text-sm font-medium text-slate-700 mb-1">
                Password <span className="text-red-600">*</span>
              </label>
              <input
                id="register-password"
                type="password"
                name="password"
                placeholder="Password"
                value={inputValue.password}
                onChange={handleInputChange}
                className={`w-full px-4 py-3 rounded-lg border ${
                  formError.password ? "border-red-500" : "border-slate-300"
                } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                autoComplete="new-password"
                required
                minLength={6}
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
                Registration successful! Redirecting...
              </div>
            )}
            <button
              type="submit"
              className="w-full py-3 cursor-pointer rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition duration-300 disabled:opacity-60"
              disabled={loading}
            >
              {loading ? "Registering..." : "Register"}
            </button>
          </form>
          <p className="text-sm text-slate-500 mt-6 text-center">
            Already have an account?{" "}
            <Link
              to='/login'
              className="text-blue-600 font-medium cursor-pointer hover:underline"
            >
              Login
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
              Organize your team’s work with industrial efficiency.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
