import React from "react";
import { Link } from "react-router-dom";
import '../styles/Dashboard.css';

const Dashboard = () => {
    return (
        <div className="dashboard-container">
            <h2 className="dashboard-title">Dashboard</h2>
            <p className="dashboard-description">Welcome to the GitHub Clone Dashboard!</p>
            <p>
                <Link to="/repos" className="view-repos-link">View Repositories</Link>
            </p>
        </div>
    );
};

export default Dashboard;

