import React from 'react';

const Cart = ({ task, deleteTask, updateTask }) => {
  const handleTaskDelete = (id) => {
    if (window.confirm('Are you sure to delete this task?')) {
      deleteTask(id);
    }
  };

  if (!task.length) {
    return (
      <li className="task-card empty-state">
        <div className="task-body">
          <span aria-hidden="true" className="card-emoji">
            [tea]
          </span>
          <div className="task-copy">
            <h4>No tasks on the shelf yet</h4>
            <p>Add a task to see it perch beside the kettle.</p>
          </div>
        </div>
      </li>
    );
  }

  return task.map((item) => (
    <li
      key={item.id}
      className={item.complete ? 'task-card complete' : 'task-card'}
    >
      <div className="task-body">
        <label className="task-toggle">
          <input
            type="checkbox"
            onChange={() => updateTask(item.id, !item.complete)}
            checked={item.complete}
          />
          <span className="checkmark" aria-hidden="true" />
        </label>

        <div className="task-copy">
          <h4>{item.task}</h4>
          <p>Placeholder calendar & timer data coming soon.</p>
        </div>

        <button
          type="button"
          className="delete-btn"
          onClick={() => handleTaskDelete(item.id)}
          aria-label="Delete task"
        >
          X
        </button>
      </div>
    </li>
  ));
};

export default Cart;
