import React from 'react'
import AcceptTask from './AcceptTask'
import NewTasks from './NewTasks'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'

const Tasks = ({data}) => {
    console.log(data);
  return (
    <div id='Tasks' className='h-[55%] w-full flex flex-nowrap flex-col md:flex-row mt-10 py-5 items-center justify-start gap-3 overflow-x-auto '>
        {data.tasks.map((elem) => {
            if(elem.active){
                return <AcceptTask key={elem.id} task={elem}/>
            } else if(elem.newTask){
                return <NewTasks key={elem.id} task={elem}/>
            } else if(elem.completed){
                return <CompleteTask key={elem.id} task={elem}/>
            } else if(elem.failed){
                return <FailedTask key={elem.id} task={elem}/>
            }
        })}
    </div>
  )
}

export default Tasks