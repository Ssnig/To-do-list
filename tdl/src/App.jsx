import React, { useEffect, useRef, useState } from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { gsap } from 'gsap';
import Form from './components/Form';
import List from './components/List';
import { api } from './api/apiResource';
import { v4 as uuid } from 'uuid';

function App() {
  const [tasks, setTasks] = useState([]);
  const boardRef = useRef(null);
  const animationRef = useRef(null);

  const fetchData = async () => {
    try {
      const response = await api.get('/todolist');
      setTasks(response.data);
    } catch (error) {
      console.error('Unable to load to-do items', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (!boardRef.current) {
      return;
    }

    animationRef.current?.kill();
    animationRef.current = gsap.timeline({ defaults: { ease: 'power3.out' } });

    animationRef.current.fromTo(
      boardRef.current.querySelectorAll('.task-card'),
      { y: 40, opacity: 0, rotateX: -10 },
      { y: 0, opacity: 1, rotateX: 0, duration: 0.6, stagger: 0.08 }
    );
  }, [tasks]);

  const submitTask = async (userTask) => {
    const trimmed = userTask.trim();
    if (!trimmed) {
      return;
    }

    const payload = {
      id: uuid(),
      task: trimmed,
      complete: false,
    };

    try {
      await api.post('/todolist', payload);
      await fetchData();
    } catch (error) {
      console.error('Unable to create task', error);
    }
  };

  const deleteTask = async (taskId) => {
    try {
      await api.delete(`/todolist/${taskId}`);
      await fetchData();
    } catch (error) {
      console.error('Unable to delete task', error);
    }
  };

  const updateTask = async (taskId, complete) => {
    try {
      await api.patch(`/todolist/${taskId}`, { complete });
      await fetchData();
    } catch (error) {
      console.error('Unable to update task', error);
    }
  };

  return (
    <div className="app-shell">
      <div className="decor-stripes" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>

      <header className="app-header">
        <h1>Tea Break To-Do Lounge</h1>
        <p>Curate your day with mindful tasks, right beside your favorite brew.</p>
      </header>

      <div className="app-content">
        <aside className="mood-panel">
          <section className="shelf-scene" aria-label="Decorative shelf with tea kettle and lounge chair">
            <div className="shelf">
              <div className="kettle">
                <div className="lid" />
                <div className="handle" />
                <div className="spout" />
              </div>
              <div className="steam">
                <span />
                <span />
                <span />
              </div>
              <div className="chair">
                <div className="backrest" />
                <div className="seat" />
                <div className="leg leg-left" />
                <div className="leg leg-right" />
              </div>
            </div>
            <div className="shelf-shadow" />
          </section>

          <section className="placeholder-card image-placeholder">
            <h3>Idea Snapshot</h3>
            <p>Pin an inspiring image or sketch to set the tone for your day.</p>
            <button type="button" className="ghost-btn">Attach Image</button>
          </section>

          <section className="placeholder-card timer-placeholder">
            <h3>Focus Timer</h3>
            <p>Reserve time for deep work sessions and gentle breaks.</p>
            <div className="dial">
              <span className="dial-hand" />
              <span className="dial-mark" />
            </div>
          </section>

          <section className="placeholder-card calendar-placeholder">
            <h3>Calendar Corner</h3>
            <p>Schedule your tasks and keep track of important dates.</p>
            <div className="calendar-grid">
              {[...Array(6)].map((_, index) => (
                <span key={index} />
              ))}
            </div>
          </section>
        </aside>

        <main className="task-board" ref={boardRef}>
          <Form submitTask={submitTask} />
          <List task={tasks} deleteTask={deleteTask} updateTask={updateTask} />
        </main>
      </div>
    </div>
  );
}

export default App;
