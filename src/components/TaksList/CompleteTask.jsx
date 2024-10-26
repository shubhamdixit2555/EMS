import React from 'react'

const CompleteTask = ({task}) => {
  return (
    <div className='w-full min-h-[300px] md:min-h-[250px] md:w-[300px] p-5 bg-green-500 flex-shrink-0 rounded-xl flex flex-col gap-3 justify-between '>
        <div className='flex justify-between text-sm items-center font-semibold'>
            <p className='bg-black bg-opacity-50 py-2 px-3 rounded-full'>{task.category}</p>
            <p>{task.taskDate}</p>
        </div>
        <h2 className='text-2xl font-semibold'>{task.taskTitle}</h2>
        <h3 className='text-xl'>{task.taskDescription}</h3>
        <div className='flex justify-center mt-3'>
            <button className='bg-green-900 py-2 px-3 text-sm rounded-md w-full'>Completed</button>
        </div>
    </div>
  )
}

export default CompleteTask