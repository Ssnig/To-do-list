import React from 'react'
import './CSS/form.css'

const Form = () => {
    return (
        <>
        <h4 className='mb-4 text-white mt-3'>To-Do List</h4>
            <div className='row'>
                <div className="col-6 offset-2">
                    <input type="text" className='form-control' placeholder='Enter Task....' />
                </div>
                <div className="col-3">
                    <button className='btn btn-primary'> <i class="fa-solid fa-plus"></i>Add Task</button>
                </div>

            </div>
            
        </>
    )
}

export default Form