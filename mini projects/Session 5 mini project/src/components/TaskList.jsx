import React from 'react';
import { useTasks } from '../store/taskContext';
import TaskItem from './TaskItem';

const TaskList = () => {
    const { tasks } = useTasks();

    if (tasks.length === 0) {
        return <p style={{ textAlign: 'center', opacity: 0.6, marginTop: '1rem' }}>No tasks yet. Add one above!</p>;
    }

    return (
        <ul className="task-list">
            {tasks.map((task) => (
                <TaskItem key={task.id} task={task} />
            ))}
        </ul>
    );
};

export default TaskList;
