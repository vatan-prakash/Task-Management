import React, { useState } from 'react';
import './Task.css';

const TaskForm = ({ onSave }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');

  const handleSave = () => {
    const newTask = {
      id: new Date().getTime(),
      title,
      description,
      dueDate,
    };
    onSave(newTask);
    setTitle('');
    setDescription('');
    setDueDate('');
  };

  return (
    <div className="task-form-container">
      <h2>Add Task</h2>
      <label>Title:</label>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="form-input"
      />
      <label>Description:</label>
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="form-input"
      />
      <label>Due Date:</label>
      <input
        type="text"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
        className="form-input"
      />
      <button onClick={handleSave} className="save-button">
        Save
      </button>
    </div>
  );
};

export default TaskForm;
