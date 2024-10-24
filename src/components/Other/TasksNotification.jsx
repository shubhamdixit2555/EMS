import React from 'react'

const TasksNotification = () => {
  return (
        <div className='grid grid-cols-2 md:flex mt-5 justify-between gap-3'>
            <div className='w-[100%] md:w-[50%] bg-blue-500 rounded-xl px-6 py-4 flex flex-col gap-2 justify-around'>
                <h2 className='text-3xl font-semibold'>0</h2>
                <h3 className='text-2xl font-medium'>New Task</h3>
            </div>
            <div className='w-[100%] md:w-[50%] bg-green-500 rounded-xl px-6 py-4 flex flex-col gap-2 justify-around'>
                <h2 className='text-3xl font-semibold'>0</h2>
                <h3 className='text-2xl font-medium'>Completed Task</h3>
            </div>
            <div className='w-[100%] md:w-[50%] bg-yellow-500 rounded-xl px-6 py-4 flex flex-col gap-2 justify-around'>
                <h2 className='text-3xl font-semibold'>0</h2>
                <h3 className='text-2xl font-medium'>Accepted Task</h3>
            </div>
            <div className='w-[100%] md:w-[50%] bg-orange-500 rounded-xl px-6 py-4 flex flex-col gap-2 justify-around'>
                <h2 className='text-3xl font-semibold'>0</h2>
                <h3 className='text-2xl font-medium'>Failed Task</h3>
            </div>
        </div>
  )
}

export default TasksNotification