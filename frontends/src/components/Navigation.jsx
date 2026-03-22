import React from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { logout } from '../api/Auth';
import { useSelector } from 'react-redux';

const Navigation = () => {
    const navigate = useNavigate();
    const { adminUser } = useSelector(store => store.AdminUser);

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
                <h2 className="text-lg sm:text-xl capitalize border-b-2 border-zinc-400 font-bold mb-0 text-gray-800 tracking-wide">
                    {adminUser.role === "Employee" && "employee"}
                    {adminUser.role === "Admin" && "admin"}
                </h2>
            </div>
            <div className="flex flex-row font-semibold sm:gap-4 mr-5 items-center">
                {adminUser.role === "Admin" && (
                    <>
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
                    </>
                )}
                <Link
                to='/profile'
                    className='mx-2 w-8 h-8 flex items-center justify-center rounded-full bg-gray-200 text-blue-700 font-bold uppercase select-none'
                >
                    {adminUser.name ? adminUser.name[0] : ''}
                </Link>
            <button
                onClick={handleLogout}
                className="inline-block px-4 py-2 rounded bg-red-500 cursor-pointer text-md font-medium transition-colors text-gray-700 "
                type="button"
            >
                Logout
            </button>
        </div>
        </nav >
    )
}

export default Navigation;