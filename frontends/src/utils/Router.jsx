import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../pages/auth/Login'
import Dashboard from '../pages/dashboard/Dashboard'
import ProtectRoutes from '../components/ProtectRoutes'
import Employee from '../pages/employee/Employee'
import AddEmployee from '../pages/employee/AddEmployee'
import UpdateEmployee from '../pages/employee/UpdateEmployee'
import Task from '../pages/task/Task'
import CreatedTask from '../pages/task/CreatedTask'
import UpdateTask from '../pages/task/UpdateTask'
import Register from '../pages/auth/Register'
import ForgetPassword from '../pages/auth/ForgetPassword'
import Home from '../public_page/home/Home'
import EmployeeDashboard from '../employee/EmployeeDashboard'


const Router = () => {
  return (
    <Routes>
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='/forget-password' element={<ForgetPassword />} />
      <Route path='/' element={
        <ProtectRoutes>
          <Home />
        </ProtectRoutes>
      } />
      <Route path='/admin/dashboard' element={
        <ProtectRoutes>
          <Dashboard />
        </ProtectRoutes>
      } />
      <Route path='/admin/employees' element={
        <ProtectRoutes>
          <Employee />
        </ProtectRoutes>
      } />
      <Route path='/admin/employees/create' element={
        <ProtectRoutes>
          <AddEmployee />
        </ProtectRoutes>
      } />
      <Route path='/admin/employees/update/:id' element={
        <ProtectRoutes>
          <UpdateEmployee />
        </ProtectRoutes>
      } />
      <Route path='/admin/tasks' element={
        <ProtectRoutes>
          <Task />
        </ProtectRoutes>
      } />
      <Route path='/admin/tasks/create' element={
        <ProtectRoutes>
          <CreatedTask />
        </ProtectRoutes>
      } />
      <Route path='/admin/tasks/update/:id' element={
        <ProtectRoutes>
          <UpdateTask />
        </ProtectRoutes>
      } />
      <Route path='/employee/dashboard' element={
        <ProtectRoutes>
          <EmployeeDashboard />
        </ProtectRoutes>
      } />
    </Routes>
  )
}

export default Router
