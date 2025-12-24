import React, { useState } from 'react';
import { useTasks } from '../store/taskContext';

const TaskInput = () => {
    const [text, setText] = useState('');
    const { addTask } = useTasks();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (text.trim()) {
            addTask(text);
            setText('');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="task-input">
            <input
                type="text"
                placeholder="Add a new task..."
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <button type="submit" style={{ width: '100%' }}>Add Task</button>
        </form>
    );
};

export default TaskInput;
