import React from 'react';
import { useTasks } from '../store/taskContext';

const TaskItem = ({ task }) => {
    const { toggleTask, deleteTask } = useTasks();

    return (
        <li className="task-item">
            <input
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleTask(task.id)}
                style={{ width: '20px', height: '20px', cursor: 'pointer' }}
            />
            <span
                className={`task-text ${task.completed ? 'completed' : ''}`}
                onClick={() => toggleTask(task.id)}
            >
                {task.text}
            </span>
            <button
                className="danger"
                onClick={() => deleteTask(task.id)}
                aria-label="Delete task"
            >
                Delete
            </button>
        </li>
    );
};

export default TaskItem;
