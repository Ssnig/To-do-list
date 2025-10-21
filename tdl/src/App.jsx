import React, { useEffect, useState } from 'react';
import './App.css';
import Form from './components/Form';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import List from './components/List';
import { api } from './api/apiResource';
import { v4 as uuid } from 'uuid';


function App() {
  const [task, setTask] = useState([]);
  const fetchData = async () => {
    const res = await api.get('/todolist');
    setTask(res.data);
  };

  useEffect(() => {
    fetchData();
  }, [task])

  const submitTask = async (userTask) => {
    const data ={
      id:uuid(),
      task:userTask,
      complete:false,
    };
    await api.post('/todolist',data);
    
  }
  const deleteTask = async  (task_id) => {
    await api.delete(`/todolist/${task_id}`);
    
  }
  const updateTask = async (task_id,complete)=>{
    await api.patch(`/todolist/${task_id}`,{complete});
  }
  

  return (
    <div className='mx-auto  w-50' >
      <Form submitTask={submitTask} />

      <List task={task} deleteTask={deleteTask} updateTask={updateTask} />

    </div>
  );
}

export default App;
