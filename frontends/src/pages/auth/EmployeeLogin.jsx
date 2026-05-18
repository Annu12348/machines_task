import React from 'react';
import { BsBatteryCharging, BsStars } from 'react-icons/bs';
import { FaUser } from 'react-icons/fa';
import { GrSecure } from 'react-icons/gr';
import { FcCandleSticks } from 'react-icons/fc';

const EmployeeLogin = () => {
    return (
        <div className="w-full min-h-screen flex bg-zinc-200 p-3">
            {/* LEFT Panel (NO SCROLL) */}
            <div className="w-[23%] flex flex-col h-100% p-4 gap-3 items-start justify-start rounded-l-lg shadow bg-[#0e022e] flex-shrink-0 overflow-hidden">
                <div className="w-full flex items-center gap-4">
                    <h1 className="text-blue-500 text-2xl">
                        <BsBatteryCharging />
                    </h1>
                    <p className="text-white capitalize font-semibold">
                        taskPro AI
                    </p>
                </div>
                <div className="mt-5 bg-blue-900 capitalize font-semibold rounded px-2 py-1 flex items-center gap-2">
                    <span className="text-white rotate-270">
                        <BsStars />
                    </span>
                    <span className="text-sm text-white">
                        AI-Powered employee management
                    </span>
                </div>
                <h1 className="text-white text-4xl font-semibold">
                    Welcome {" "}
                    <span className="text-blue-600">Back!</span>
                </h1>
                <p className="text-white text-sm">
                    Sign in to your employee account and continue your productive journey.
                </p>
                <div className="flex items-center">
                    <span className="text-white rounded-full bg-blue-900 p-3 text-2xl mr-3">
                        <FaUser />
                    </span>
                    <div className="text-white">
                        <h2 className="font-semibold capitalize">Smart Work Management</h2>
                        <p className="text-sm mt-1">Manage tasks, deadlines, and projects efficiently in one place.</p>
                    </div>
                </div>
                <div className="flex items-center">
                    <span className="text-white rounded-full bg-blue-900 p-3 text-2xl mr-3">
                        <FcCandleSticks />
                    </span>
                    <div className="text-white">
                        <h2 className="font-semibold capitalize">AI-Powered Insights</h2>
                        <p className="text-sm mt-1">Gen AI-driven insights to boost your productivity and performance.</p>
                    </div>
                </div>
                <div className="flex items-center">
                    <span className="text-white rounded-full bg-blue-900 p-3 text-2xl mr-3">
                        <GrSecure />
                    </span>
                    <div className="text-white">
                        <h2 className="font-semibold capitalize">Secure &amp; Reliable</h2>
                        <p className="text-sm mt-1">Your data is protected with enterprise grade security.</p>
                    </div>
                </div>
            </div>
            {/* RIGHT Panel (SCROLLABLE) */}
            <div className="w-[77%] h-100% shadow rounded-r-lg bg-white p-4 overflow-y-auto max-h-[calc(100vh-1.5rem)]">
                <div className="max-w-2xl mx-auto">
                    <div className="mb-12 text-center">
                        <h2 className="text-5xl font-bold text-gray-900 mb-4">
                            Employee Login
                        </h2>
                        <p className="text-gray-500 text-xl">
                            Enter your credentials to access your account
                        </p>
                    </div>
                </div>
                <form className="space-y-3">
                    <div>
                        <label className="block text-lg font-semibold text-gray-800">
                            Email Address
                        </label>
                        <input
                            type="email"
                            placeholder="Enter your email address"
                            className="w-full border border-gray-300 rounded-lg px-3 py-2.5  text-lg outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div>
                        <label className="block text-lg font-semibold text-gray-800 ">
                            Password
                        </label>
                        <input
                            type="password"
                            placeholder="Enter your password"
                            className="w-full  border border-gray-300 rounded-lg px-3 py-2.5 text-lg outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div className="flex items-center gap-3">
                        <input type="checkbox" className="w-5 h-5" />
                        <p className="text-gray-600 text-lg">
                            I agree to the Terms of Service and Privacy Policy
                        </p>
                    </div>
                    <button
                        type="submit"
                        className="w-full h-16 bg-blue-600 hover:bg-blue-700 transition-all duration-300 rounded-2xl text-white text-xl font-semibold shadow-lg"
                    >
                        Create Account
                    </button>
                    <div className="text-center pt-2">
                        <p className="text-gray-600 text-lg">
                            Already have an account?
                            <span className="text-blue-600 font-semibold cursor-pointer ml-2">
                                Login here
                            </span>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EmployeeLogin;
