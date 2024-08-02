// src/Sidebar.js
import React from 'react';
import '../style/Sidebar.css';

const Sidebar = ({ isOpen, toggleSidebar }) => {
    return (
        <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
            <button className="toggle-button" onClick={toggleSidebar}>
                {isOpen ? 'Close' : 'Open'} Menu
            </button>
            {isOpen && (
                <>
                    <h2>Sidebar Menu</h2>
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#services">Services</a></li>
                        <li><a href="#clients">Clients</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </>
            )}
        </div>
    );
}

export default Sidebar;
