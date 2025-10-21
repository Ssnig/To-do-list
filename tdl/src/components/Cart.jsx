import React from 'react'
const Cart = ({ task, deleteTask, updateTask }) => {
    
    const handleTaskDelete = (id) => {
        if (window.confirm("Are you sure to delete this task?")) {
            deleteTask(id);

        }
    }
    return (
        <>
                {
                    task.map((task) => (
                        <div key={task.id}  className={task.complete ? "list-group-item w-100 mt-3 shadow-sm bg-success text-decoration-line-through text-white" : "list-group-item w-100 mt-3 shadow-sm bg-danger text-black"}>
                            <div className="row">
                                <div className="col-9 offset-1"><input type="checkbox" className='mx-2' onClick={() => updateTask(task.id, !task.complete)} checked={task.complete == true} /> {task.task}</div>
                                <div className="col-2">
                                    <i class="fa-solid fa-xmark" onClick={() => handleTaskDelete(task.id)}></i>
                                </div>
                            </div>
                        </div>
                    ))
                }
        </>
    )
}
export default Cart
