import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Home = () => {
  const { adminUser } = useSelector(store => store.AdminUser);
  return (
    <div className='w-full min-h-screen bg-black text-white flex text-2xl font-semibold capitalize items-center justify-center'>
      {adminUser.role == "Admin" && (
        <Link
          to="/admin/dashboard"
          className='border p-2 rounded  bg-blue-600'
        >
          go to admin dashboard
        </Link>
      )}
      {adminUser.role == "Employee" && (
        <Link
          to="/employee/dashboard"
          className='border p-2 rounded  bg-blue-600'
        >
          go to employee dashboard
        </Link>
      )}
    </div>
  )
}

export default Home
