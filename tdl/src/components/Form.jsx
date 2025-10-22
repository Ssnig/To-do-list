import React, { useState } from 'react';
import './CSS/form.css';

const Form = ({ submitTask }) => {
  const [userTask, setUserTask] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [dueTime, setDueTime] = useState('');
  const [notes, setNotes] = useState('');
  const [error, setError] = useState('');

  const formSubmitHandling = async (event) => {
    event.preventDefault();

    if (!userTask.trim()) {
      setError("Let's add a headline for your task before saving.");
      return;
    }

    await submitTask(userTask);
    setUserTask('');
    setDueDate('');
    setDueTime('');
    setNotes('');
    setError('');
  };

  return (
    <section className="form-wrapper">
      <form className="task-form" onSubmit={formSubmitHandling}>
        <div className="form-header">
          <h2>Plan your next move</h2>
          <p>Capture the task, set the mood, and let the lounge handle the ambience.</p>
        </div>

        <div className="field-grid">
          <label className="field field-headline">
            <span>Task headline</span>
            <input
              value={userTask}
              onChange={(event) => setUserTask(event.target.value)}
              type="text"
              placeholder="Brew the perfect morning agenda..."
            />
          </label>

          <label className="field field-date">
            <span>Calendar day</span>
            <input
              value={dueDate}
              onChange={(event) => setDueDate(event.target.value)}
              type="date"
            />
          </label>

          <label className="field field-time">
            <span>Focus timer</span>
            <input
              value={dueTime}
              onChange={(event) => setDueTime(event.target.value)}
              type="time"
            />
          </label>
        </div>

        <label className="field field-notes">
          <span>Tea time notes</span>
          <textarea
            value={notes}
            onChange={(event) => setNotes(event.target.value)}
            rows={3}
            placeholder="Add flavour notes, mood lighting ideas, or stretch reminders... (placeholder only)."
          />
        </label>

        <div className="form-footer">
          {error && <span className="field-error">{error}</span>}
          <button type="submit" className="primary-btn">
            <span className="btn-icon" aria-hidden="true">+</span>
            Add to shelf
          </button>
        </div>
      </form>
    </section>
  );
};

export default Form;
