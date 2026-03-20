import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { logout } from '../api/Auth';
import { setAdminUser } from '../redux/reducer/AdminUserSlice';

const Navigation = () => {
    const navigate = useNavigate();

    const navButtonClass = ({ isActive }) =>
        [
            "inline-block px-4 py-2 rounded text-md font-medium transition-colors",
            isActive
                ? "text-blue-600 underline underline-offset-4"
                : "text-gray-700 hover:underline hover:underline-offset-4"
        ].join(" ");

    const handleLogout = async () => {
        try {
            await logout();
            navigate('/login');
        } catch (error) {
            console.error("Logout failed:", error);
        }
    };

    return (
        <nav className="w-full bg-zinc-400 shadow flex flex-row items-center px-3 sm:px-6 py-2">
            <div className="flex-grow flex items-center">
                <h2 className="text-lg sm:text-xl border-b-2 border-zinc-400 font-bold mb-0 text-gray-800 tracking-wide">
                    Admin
                </h2>
            </div>
            <div className="flex flex-row font-semibold sm:gap-4 mr-5 ">
                <NavLink
                    to="/admin/dashboard"
                    className={navButtonClass}
                >
                    Dashboard
                </NavLink>
                <NavLink
                    to="/admin/employees"
                    className={navButtonClass}
                >
                    Employees
                </NavLink>
                <NavLink
                    to="/admin/tasks"
                    className={navButtonClass}
                >
                    Tasks
                </NavLink>
                <button
                    onClick={handleLogout}
                    className="inline-block px-4 py-2 rounded bg-red-500 cursor-pointer text-md font-medium transition-colors text-gray-700 "
                    type="button"
                >
                    Logout
                </button>
            </div>
        </nav>
    )
}

export default Navigation;