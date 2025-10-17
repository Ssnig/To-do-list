import React, { useEffect } from 'react';
import './App.css';
import Form from './components/Form';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import List from './components/List';


function App() {
  const fetchedata = async () => {
    const data = await fetch('http://localhost:4000/todolist ')
      .then(response => response.json())
      .catch(error => console.log("Error", error))
    console.log(data);
  }
  
  useEffect(() => {
    fetchedata();
  }, [])

  return (
    <div className='mx-auto  w-50' >

      <List />

    </div>
  );
}

export default App;
