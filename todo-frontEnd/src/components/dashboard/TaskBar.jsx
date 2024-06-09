import React from 'react'
import TaskbarItem from './TaskbarItem'
import taskData from '../data'

function TaskBar() {
  return (
    <div className='flex flex-col gap-3'>
      <div className=" w-full flex justify-end">
        <div>Welcome back <span>ash</span></div>
      </div>
      <div className=" w-full h-[320px] overflow-scroll overflow-x-hidden ">
        {
          taskData.map((task)=>{
            return <TaskbarItem key={task.id} task={task.task} />
          })
        }
        
      </div>
    </div>
  )
}

export default TaskBar