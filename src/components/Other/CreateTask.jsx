import React from 'react'

const CreateTask = () => {
  return (
    <div>
      <form className='mt-2 flex flex-col gap-2 w-[100%] md:flex-row md:w-full md:items-center md:justify-around bg-[#1C1C1C] p-5 rounded-md'>
        <div className='flex flex-col gap-1 w-[40%]'>
          <h3 className='text-lg'>Task Title</h3>
          <input type="text" placeholder='Make a UI design' className='text-sm p-2 mb-2 border-2 border-gray-400 bg-transparent min-w-[300px]'/>
          <h3 className='text-lg'>Date</h3>
          <input type="date" className=' text-sm p-2 mb-2 border-2 border-gray-400 bg-transparent min-w-[300px]'/>
          <h3 className='text-lg'>Assign to</h3>
          <input type="text" placeholder='employee name' className='text-sm p-2 mb-2 border-2 border-gray-400 bg-transparent min-w-[300px]'/>
          <h3 className='text-lg'>Category</h3>
          <input type="text" placeholder='Design, Development, etc...' className='text-sm p-2 mb-2 border-2 border-gray-400 bg-transparent min-w-[300px]'/>
        </div>
        <div className='flex flex-col gap-2 w-[40%]'>
          <h3 className='text-lg'>Description</h3>
          <textarea name='' id='' cols="30" rows="10" placeholder='Detailed description of task (Max 500 words)' className='text-sm p-2 mb-4 border-2 border-gray-400 bg-transparent min-w-[300px]'/>
          <button type="submit"  className='bg-orange-600 rounded-xl px-4 py-2 min-w-[300px] text-xl text-center items-center'>Create Task</button>
        </div>
      </form>
    </div>
  )
}

export default CreateTask