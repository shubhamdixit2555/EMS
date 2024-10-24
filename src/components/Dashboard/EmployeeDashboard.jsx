import React from 'react'
import Header from '../Other/Header'
import TasksNotification from '../Other/TasksNotification'
import Tasks from '../TaksList/Tasks'

const EmployeeDashboard = () => {
  return (
    <div>
        <Header />
        <TasksNotification />
        <Tasks />
    </div>
  )
}

export default EmployeeDashboard