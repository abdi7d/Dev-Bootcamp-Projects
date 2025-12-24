import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import TaskInput from '../components/TaskInput';
import TaskList from '../components/TaskList';

const Home = () => {
    return (
        <div className="container">
            <Header />
            <nav className="nav-links">
                <Link to="/">Home</Link>
                <Link to="/stats">Stats</Link>
            </nav>
            <TaskInput />
            <TaskList />
        </div>
    );
};

export default Home;
