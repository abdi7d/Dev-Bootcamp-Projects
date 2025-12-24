import React from 'react';
import { useTasks } from '../store/taskContext';
import { Link } from 'react-router-dom';

const Header = () => {
    const { darkMode, toggleTheme } = useTasks();

    return (
        <header className="header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
            <h1>Task Tracker</h1>
            <button onClick={toggleTheme}>
                {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
            </button>
        </header>
    );
};

export default Header;
