import React from 'react';
import Cart from './Cart';
import './CSS/List.css';

const List = ({ task, deleteTask, updateTask }) => (
  <section className="list-wrapper">
    <div className="list-header">
      <h3>Today's lineup</h3>
      <p>Tick through the tasks while the lounge keeps things warm.</p>
    </div>

    <ol className="task-collection">
      <Cart task={task} deleteTask={deleteTask} updateTask={updateTask} />
    </ol>
  </section>
);

export default List;
