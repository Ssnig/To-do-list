import React from 'react'
import Form from './Form'
import Cart from './Cart'

const List = ({task , deleteTask,updateTask}) => {
  return (
    <div>
        
        <div>
            <ol className='list-group'>
                <Cart task={task} deleteTask={deleteTask} updateTask={updateTask}/>
                

            </ol>
        </div>
    </div>
  )
}

export default List