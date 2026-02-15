import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Navigation from "../../components/Navigation";

const Dashboard = () => {
  const employees = useSelector((store) => store.Employeess.employees) || [];
  const tasks = useSelector((store) => store.Taskss.tasks) || [];

  const [stats, setStats] = useState({
    totalEmployees: 0,
    totalTasks: 0,
    pendingTasks: 0,
    inProgressTasks: 0,
    completedTasks: 0,
    activeEmployees: 0,
    inactiveEmployees: 0,
  });

  useEffect(() => {
    let activeCount = 0;
    let inactiveCount = 0;

    if (Array.isArray(employees)) {
      
      if (typeof employees[0]?.active === "boolean") {
        activeCount = employees.filter(emp => emp.active === true).length;
        inactiveCount = employees.filter(emp => emp.active === false).length;
      }
      else if (typeof employees[0]?.status === "string") {
        activeCount = employees.filter(emp => emp.status === "Active").length;
        inactiveCount = employees.filter(emp => emp.status === "Inactive").length;
      }
    }

    setStats({
      totalEmployees: Array.isArray(employees) ? employees.length : 0,
      totalTasks: Array.isArray(tasks) ? tasks.length : 0,
      pendingTasks: Array.isArray(tasks)
        ? tasks.filter((t) => t.status === "Pending").length
        : 0,
      inProgressTasks: Array.isArray(tasks)
        ? tasks.filter((t) => t.status === "In Progress").length
        : 0,
      completedTasks: Array.isArray(tasks)
        ? tasks.filter((t) => t.status === "Completed").length
        : 0,
      activeEmployees: activeCount,
      inactiveEmployees: inactiveCount,
    });
  }, [employees, tasks]);

  return (
    <div className="w-full min-h-screen bg-zinc-200 pb-2">
      <Navigation />
      <div className="bg-white rounded-2xl shadow p-4 sm:p-6 md:p-8 flex-1 mx-2 sm:mx-4 md:mx-8 my-4 sm:my-6 md:my-8">
        <div className="flex-1 p-2 sm:p-6 md:p-10">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-700 mb-6 sm:mb-10">
            Dashboard
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            <div className="bg-blue-600 text-white rounded-2xl p-4 sm:p-6 md:p-8 shadow-lg">
              <h2 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-4">Total Employees</h2>
              <p className="text-3xl sm:text-4xl md:text-5xl font-bold">{stats.totalEmployees}</p>
            </div>
            <div className="bg-green-500 text-white rounded-2xl p-4 sm:p-6 md:p-8 shadow-lg">
              <h2 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-4">Active Employees</h2>
              <p className="text-3xl sm:text-4xl md:text-5xl font-bold">{stats.activeEmployees}</p>
            </div>
            <div className="bg-red-500 text-white rounded-2xl p-4 sm:p-6 md:p-8 shadow-lg">
              <h2 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-4">Inactive Employees</h2>
              <p className="text-3xl sm:text-4xl md:text-5xl font-bold">{stats.inactiveEmployees}</p>
            </div>
            <div className="bg-orange-500 text-white rounded-2xl p-4 sm:p-6 md:p-8 shadow-lg">
              <h2 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-4">Total Tasks</h2>
              <p className="text-3xl sm:text-4xl md:text-5xl font-bold">{stats.totalTasks}</p>
            </div>
            <div className="bg-yellow-500 text-white rounded-2xl p-4 sm:p-6 md:p-8 shadow-lg">
              <h2 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-4">Pending Tasks</h2>
              <p className="text-3xl sm:text-4xl md:text-5xl font-bold">{stats.pendingTasks}</p>
            </div>
            <div className="bg-purple-500 text-white rounded-2xl p-4 sm:p-6 md:p-8 shadow-lg">
              <h2 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-4">In Progress Tasks</h2>
              <p className="text-3xl sm:text-4xl md:text-5xl font-bold">{stats.inProgressTasks}</p>
            </div>
            <div className="bg-green-600 text-white rounded-2xl p-4 sm:p-6 md:p-8 shadow-lg">
              <h2 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-4">Completed Tasks</h2>
              <p className="text-3xl sm:text-4xl md:text-5xl font-bold">{stats.completedTasks}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
