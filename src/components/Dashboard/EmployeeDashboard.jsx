import React from 'react'
import Header from '../Other/Header'
import TasksNotification from '../Other/TasksNotification'
import Tasks from '../TaksList/Tasks'

const EmployeeDashboard = ({data}) => {
  return (
    <div>
        <Header data={data}/>
        <TasksNotification data={data}/>
        <Tasks data={data}/>
    </div>
  )
}

export default EmployeeDashboard