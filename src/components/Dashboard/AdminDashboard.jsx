import React, { useEffect, useState } from 'react'
import Header from '../Other/Header'
import CreateTask from '../Other/CreateTask'
import AllTask from '../Other/AllTask'

const AdminDashboard = ({data}) => {
  return (
    <div>
      <Header data={data}/>
      <CreateTask />
      <AllTask />
    </div>
  )
}

export default AdminDashboard