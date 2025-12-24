import React from 'react';
import { Link } from 'react-router-dom';
import { useTasks } from '../store/taskContext';
import Header from '../components/Header';

const Stats = () => {
    const { tasks } = useTasks();

    const total = tasks.length;
    const completed = tasks.filter(t => t.completed).length;
    const remaining = total - completed;

    return (
        <div className="container">
            <Header />
            <nav className="nav-links">
                <Link to="/">Home</Link>
                <Link to="/stats">Stats</Link>
            </nav>

            <h2 style={{ textAlign: 'center' }}>Task Statistics</h2>

            <div className="stats-container">
                <div className="stat-box">
                    <h3>Total</h3>
                    <p style={{ fontSize: '2rem', margin: 0 }}>{total}</p>
                </div>
                <div className="stat-box">
                    <h3>Done</h3>
                    <p style={{ fontSize: '2rem', margin: 0, color: 'var(--primary-color)' }}>{completed}</p>
                </div>
                <div className="stat-box">
                    <h3>Left</h3>
                    <p style={{ fontSize: '2rem', margin: 0, color: 'var(--danger-color)' }}>{remaining}</p>
                </div>
            </div>
        </div>
    );
};

export default Stats;
