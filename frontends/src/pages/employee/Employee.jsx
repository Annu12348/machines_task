import Navigation from '../../components/Navigation'
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { allEmployee, deleteEmployee, searchEmployee } from '../../api/Employee';
import { FiEdit2, FiTrash2, FiSearch } from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';
import { setEmployees, removeEmployees } from '../../redux/reducer/EmployeeSlice';

const Employee = () => {
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);
  const [deletingId, setDeletingId] = useState(null);
  const dispatch = useDispatch();
  const employee = useSelector(store => store.Employeess.employees);

  const fetchEmployees = async () => {
    setLoading(true);
    try {
      const { data } = await allEmployee();
      if (data && Array.isArray(data.result)) {
        dispatch(setEmployees(data.result));
      } else if (Array.isArray(data)) {
        dispatch(setEmployees(data));
      } else {
        dispatch(setEmployees([]));
      }
    } catch (error) {
      dispatch(setEmployees([]));
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const searchEmployeeApi = async (searchValue) => {
    setLoading(true);
    try {
      const { data } = await searchEmployee(searchValue);
      if (data && Array.isArray(data.result)) {
        dispatch(setEmployees(data.result));
      } else if (Array.isArray(data)) {
        dispatch(setEmployees(data));
      } else {
        dispatch(setEmployees([]));
      }
    } catch (error) {
      dispatch(setEmployees([]));
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (search && search.trim() !== "") {
        searchEmployeeApi(search);
      } else {
        fetchEmployees();
      }
    }, 400);

    return () => clearTimeout(delayDebounceFn);
  }, [search]);
  
  const deleteEmployeeApi = async (employeeId) => {
    if (!employeeId) {
      return;
    }
    setDeletingId(employeeId);
    try {
      const response = await deleteEmployee(employeeId);
      if (
        (response?.data && response.data.success) ||
        response?.success ||
        response?.status === 200 ||
        response?.status === 204
      ) {
        dispatch(removeEmployees(employeeId));
      } else {
        await fetchEmployees();
      }
    } catch (error) {
      console.error(error);
      await fetchEmployees();
    } finally {
      setDeletingId(null);
    }
  };

  const employeeList = Array.isArray(employee) ? employee : [];
  return (
    <div className="w-full min-h-screen bg-zinc-200 pb-2">
      <Navigation />
      <div className="bg-white rounded-2xl shadow p-5 xs:p-2 sm:p-4 md:p-8 max-w-7xl mx-auto my-6 xs:my-2 flex-1">
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-0 justify-between items-start sm:items-center mb-6">
          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-blue-900 mb-2 sm:mb-0">Employees</h1>
          <Link
            to='/admin/employees/create'
            className="bg-blue-700 text-white px-4 sm:px-5 py-2 font-semibold rounded-lg shadow hover:bg-blue-800 transition-all whitespace-nowrap"
          >
            Add Employee
          </Link>
        </div>
        <div className="mb-6 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
          <div className="relative w-full sm:w-1/3 min-w-[180px] max-w-lg flex-grow">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-blue-500 z-10">
              <FiSearch />
            </span>
            <input
              type="text"
              placeholder="Search employee..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="w-full pl-10 pr-5 py-2 border-2 border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 font-medium shadow text-base"
            />
          </div>
        </div>
        <div className="w-full">
          <div className="hidden md:block overflow-x-auto rounded-xl shadow-md">
            <table className="w-full text-left divide-y divide-blue-200 min-w-[700px]">
              <thead className="bg-blue-500 text-white">
                <tr>
                  <th className="py-4 px-4 font-semibold tracking-wide">#</th>
                  <th className="py-4 px-4 font-semibold tracking-wide">Name</th>
                  <th className="py-4 px-4 font-semibold tracking-wide">Email</th>
                  <th className="py-4 px-4 font-semibold tracking-wide">Phone</th>
                  <th className="py-4 px-4 font-semibold tracking-wide">Department</th>
                  <th className="py-4 px-4 font-semibold tracking-wide">Status</th>
                  <th className="py-4 px-4 font-semibold tracking-wide">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-blue-100">
                {loading ? (
                  <tr>
                    <td colSpan={7} className="text-center py-12 text-blue-400 text-lg font-semibold tracking-widest">
                      Loading...
                    </td>
                  </tr>
                ) : employeeList.length > 0 ? (
                  employeeList.map((emp, idx) => {
                    const thisId = emp._id || emp.id || "";
                    return (
                      <tr
                        key={thisId || idx}
                        className={`transition-colors hover:bg-blue-50 ${idx % 2 === 1 ? 'bg-blue-50/60' : ''}`}
                      >
                        <td className="py-4 px-4 text-gray-500">{idx + 1}</td>
                        <td className="py-4 px-4 flex items-center gap-2 font-medium text-blue-900 max-w-xs break-words">
                          <span className="inline-flex items-center justify-center h-9 w-9 rounded-full bg-blue-200 font-bold text-blue-800 shadow-sm shrink-0">
                            {(emp.name || '')
                              .split(' ')
                              .map(word => word?.[0] || '')
                              .join('')
                            }
                          </span>
                          <span className="truncate">{emp.name}</span>
                        </td>
                        <td className="py-4 px-4 max-w-xs break-words">{emp.email}</td>
                        <td className="py-4 px-4 max-w-xs break-words">{emp.phone}</td>
                        <td className="py-4 px-4">
                          <span className="inline-block px-3 py-1 rounded-lg bg-purple-100 text-purple-600 font-medium text-sm shadow">
                            {emp.department}
                          </span>
                        </td>
                        <td className="py-4 px-4">
                          <span
                            className={`inline-block px-3 py-1 rounded-full text-sm font-semibold shadow ${
                              emp.status === 'Active'
                                ? 'bg-green-200 text-green-700'
                                : 'bg-red-200 text-red-700'
                            }`}
                          >
                            {emp.status}
                          </span>
                        </td>
                        <td className="py-4 px-4 flex gap-1 space-x-2">
                          <Link 
                            to={`/admin/employees/update/${emp._id}`}
                            className="bg-blue-800 text-white px-4 py-1.5 rounded-full font-semibold shadow hover:scale-105 transition-transform flex items-center justify-center"
                            aria-label="Edit Employee"
                          >
                            <FiEdit2 size={18} />
                          </Link>
                          <button
                            className={`bg-red-600 text-white px-4 py-1.5 rounded-full font-semibold shadow flex items-center justify-center transition-transform ${
                              deletingId === thisId ? 'opacity-60 cursor-not-allowed' : 'hover:scale-105'
                            }`}
                            aria-label="Delete Employee"
                            disabled={deletingId === thisId}
                            onClick={() => deleteEmployeeApi(thisId)}
                          >
                            {deletingId === thisId ? (
                              <svg className="animate-spin mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
                              </svg>
                            ) : <FiTrash2 size={18} />}
                          </button>
                        </td>
                      </tr>
                    )
                  })
                ) : (
                  <tr>
                    <td colSpan={7} className="text-center py-12 text-gray-400 text-lg font-semibold tracking-widest">
                      No employees found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
          <div className="md:hidden flex flex-col gap-4">
            {loading ? (
              <div className="w-full py-12 text-center text-blue-400 text-base font-semibold tracking-widest">
                Loading...
              </div>
            ) : employeeList.length > 0 ? employeeList.map((emp, idx) => {
              const thisId = emp._id || emp.id || "";
              return (
                <div
                  key={thisId || idx}
                  className="rounded-xl shadow bg-white px-3 py-4 flex flex-col gap-2"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <span className="inline-flex items-center justify-center h-9 w-9 rounded-full bg-blue-200 font-bold text-blue-800 shadow-sm shrink-0">
                      {(emp.name || '')
                        .split(' ')
                        .map(word => word?.[0] || '')
                        .join('')
                      }
                    </span>
                    <span className="text-blue-900 font-semibold text-base break-words line-clamp-1">
                      {emp.name}
                    </span>
                    <span className={`ml-auto rounded px-2 py-0.5 text-xs font-semibold shadow ${
                        emp.status === 'Active'
                          ? 'bg-green-200 text-green-700'
                          : 'bg-red-200 text-red-700'
                      }`}
                    >
                      {emp.status}
                    </span>
                  </div>
                  <div className="grid grid-cols-1 xs:grid-cols-2 gap-x-2 gap-y-1 mb-1 text-[0.95rem]">
                    <div>
                      <span className="text-gray-400 text-xs">Email:</span>
                      <div className="font-medium text-gray-700 break-words">{emp.email}</div>
                    </div>
                    <div>
                      <span className="text-gray-400 text-xs">Phone:</span>
                      <div className="font-medium text-gray-700 break-words">{emp.phone}</div>
                    </div>
                    <div>
                      <span className="text-gray-400 text-xs">Department:</span>
                      <div>
                        <span className="inline-block px-2 py-0.5 rounded bg-purple-100 text-purple-600 font-medium text-xs shadow">{emp.department}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-2 justify-end mt-1">
                    <Link
                      to={`/employees/update/${emp._id}`}
                      className="bg-blue-700 text-white px-4 py-1 rounded-full font-semibold shadow hover:bg-blue-800 transition flex items-center justify-center text-sm"
                      aria-label="Edit Employee"
                    >
                      <FiEdit2 size={16} />
                    </Link>
                    <button
                      className={`bg-red-600 text-white px-4 py-1 rounded-full font-semibold shadow flex items-center justify-center transition ${
                        deletingId === thisId ? 'opacity-60 cursor-not-allowed' : 'hover:scale-105'
                      } text-sm`}
                      aria-label="Delete Employee"
                      disabled={deletingId === thisId}
                      onClick={() => deleteEmployeeApi(thisId)}
                    >
                      {deletingId === thisId ? (
                        <svg className="animate-spin mr-1 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
                        </svg>
                      ) : <FiTrash2 size={16} />}
                    </button>
                  </div>
                </div>
              );
            }) : (
              <div className="w-full py-12 text-center text-gray-400 text-base font-semibold tracking-widest">
                No employees found.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Employee
