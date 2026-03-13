import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import { changePassword, otpVerify, resetOtpJenerateToSend } from '../../api/Auth';


const ForgetPassword = () => {
  const [loading, setLoading] = useState(false);
  const [step, setStep] = useState(1)
  const [otp, setOtp] = useState("")
  const [comfirmPassword, setcomfirmPassword] = useState("")
  const [newPassword, setNewPassword] = useState("")
  const [formError, setFormError] = useState({});
  const [submitError, setSubmitError] = useState("");
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate()
  const [inputValue, setInputValue] = useState({
    email: ""
  })

  const validate = (values) => {
    const errors = {};
    if (!values.email) {
      errors.email = "Email is required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
    ) {
      errors.email = "Invalid email address";
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

  const sendEmailToOtpApi = async () => {
    try {
      setSubmitError("");
      setSuccess(false);
      const errors = validate(inputValue);
      if (Object.keys(errors).length > 0) {
        setFormError(errors);
        return;
      }
      setLoading(true);
      await resetOtpJenerateToSend(inputValue);
      setStep(2)
      setSuccess(true);
    } catch (error) {
      setSubmitError(
        error?.response?.data?.message ||
        error?.message ||
        "Something went wrong. Please try again."
      );
      setSuccess(false);
    } finally {
      setLoading(false);
    }
  }

  const verifyOtpApi = async () => {
    try {
      setSubmitError("");
      setSuccess(false);
      if (!otp || otp.trim().length === 0) {
        setFormError(prev => ({ ...prev, otp: "OTP is required" }));
        return;
      }

      setLoading(true);
      const dataToSend = {
        email: inputValue.email,
        otp: otp.trim()
      };
      const response = await otpVerify(dataToSend);
      setStep(3)
      setSuccess(true);
    } catch (error) {
      setSubmitError(
        error?.response?.data?.message ||
        error?.message ||
        "Something went wrong. Please try again."
      );
      setSuccess(false);
    } finally {
      setLoading(false);
    }
  }

  const changePasswordApi = async () => {
    if (newPassword !== comfirmPassword) {
      setFormError((prev) => ({
        ...prev,
        comfirmPassword: "Passwords do not match"
      }));
      setcomfirmPassword("");
      setNewPassword("");
      return;
    }

    try {
      setSubmitError("");
      setSuccess(false);

      if (!newPassword || newPassword.trim().length === 0) {
        setFormError(prev => ({ ...prev, newPassword: "New password is required" }));
        return;
      }

      setLoading(true);
      const dataToSend = {
        email: inputValue.email,
        newPassword: newPassword.trim()
      };

      await changePassword(dataToSend);

      setSuccess(true);
      navigate("/login");
    } catch (error) {
      setSubmitError(
        error?.response?.data?.message ||
        error?.message ||
        "Something went wrong. Please try again."
      );
      setSuccess(false);
    } finally {
      setLoading(false);
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    sendEmailToOtpApi()
  }

  const handleSubmit1 = (e) => {
    e.preventDefault();
    verifyOtpApi()
  }

  const handleSubmit2 = (e) => {
    e.preventDefault();
    changePasswordApi()
  }

  return (
    <div className="min-h-screen w-full bg-zinc-200 flex items-center justify-center p-4 sm:p-6">
      <div className="w-full max-w-md md:max-w-4xl bg-white rounded-3xl overflow-hidden grid grid-cols-1 md:grid-cols-5 shadow-lg min-h-[550px]">
        <div className="p-6 flex flex-col justify-center col-span-1 md:col-span-2">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-800 mb-3">Forgot Password</h1>
          <p className="text-slate-500 mb-8 text-base">
            Enter your registered email address. We'll send you an OTP to reset your password.
          </p>
          {step == 1 && (
            <form className="space-y-5" onSubmit={handleSubmit} noValidate>
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
                  required
                />
                {formError.email && (
                  <p className="text-red-600 text-sm mt-1">{formError.email}</p>
                )}
              </div>
              {submitError && (
                <div className="text-red-600 text-center text-sm">{submitError}</div>
              )}
              {success && (
                <div className="text-green-600 text-center text-sm">
                  OTP has been sent to your email address!
                </div>
              )}
              <button
                type="submit"
                className="w-full py-3 cursor-pointer capitalize rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition duration-300 disabled:opacity-60"
                disabled={loading}
              >
                {loading ? "Sending OTP..." : "Send OTP"}
              </button>
            </form>
          )}

          {step == 2 && (
            <form className="space-y-5" onSubmit={handleSubmit1} noValidate>
              <div>
                <input
                  type="text"
                  name="otp"
                  placeholder="Enter Your Otp"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  className={`w-full px-4 py-3 rounded-lg border ${formError.otp ? "border-red-500" : "border-slate-300"
                    } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                  autoComplete="one-time-code"
                  required
                />
                {formError.otp && (
                  <p className="text-red-600 text-sm mt-1">{formError.otp}</p>
                )}

              </div>
              <button
                type="submit"
                className="w-full py-3 cursor-pointer capitalize rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition duration-300 disabled:opacity-60"
                disabled={loading}
              >
                {loading ? "Verifying OTP..." : "Verify OTP"}
              </button>
            </form>
          )}

          {step === 3 && (
            <form className="space-y-5" onSubmit={handleSubmit2} noValidate>
              <div>
                <input
                  type="password"
                  name="newPassword"
                  placeholder="Enter Your New Password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  className={`w-full px-4 py-3 rounded-lg border ${formError.newPassword ? "border-red-500" : "border-slate-300"
                    } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                  autoComplete="new-password"
                  required
                />
                {formError.newPassword && (
                  <p className="text-red-600 text-sm mt-1">{formError.newPassword}</p>
                )}
              </div>
              <div>
                <input
                  type="password"
                  name="comfirmPassword"
                  placeholder="Confirm Your New Password"
                  value={comfirmPassword}
                  onChange={(e) => setcomfirmPassword(e.target.value)}
                  className={`w-full px-4 py-3 rounded-lg border ${formError.comfirmPassword ? "border-red-500" : "border-slate-300"
                    } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                  autoComplete="new-password"
                  required
                />
                {formError.comfirmPassword && (
                  <p className="text-red-600 text-sm mt-1">{formError.comfirmPassword}</p>
                )}
              </div>
              {submitError && (
                <div className="text-red-600 text-center text-sm">{submitError}</div>
              )}
              <button
                type="submit"
                className="w-full py-3 cursor-pointer capitalize rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition duration-300 disabled:opacity-60"
                disabled={loading}
              >
                {loading ? "Changing Password..." : "Change Password"}
              </button>
            </form>
          )}
          <p className="text-sm text-slate-500 mt-6 text-center">
            Remembered your password?{" "}
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
              Organize your team’s work with ease.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ForgetPassword

