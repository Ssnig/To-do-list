import React,{useState} from 'react'
import './CSS/form.css'

const Form = ({submitTask}) => {
    const [userTask,setUserTask] = useState("")
    const formSubmitHandling = () => {
        submitTask(userTask);
        setUserTask("");

    
  }
    
    return (
        
        <>
        <h4 className='mb-4 text-white mt-3'>To-Do List</h4>
            <div className='row'>
                <div className="col-6 offset-2">
                    <input value={userTask} onChange={e=>setUserTask(e.target.value)} type="text" className='form-control' placeholder='Enter Task....' />
                </div>
                <div className="col-3">
                    <button type='button' onClick={()=>formSubmitHandling(userTask)} className='btn btn-primary'> <i className="fa-solid fa-plus"></i>Add Task</button>
                </div>

            </div>
            
        </>
    )
}

export default Form