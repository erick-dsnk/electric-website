import React, { Link } from 'react';
import './Header.css';

function Header() {
    return (
        <div className="Header">
            <h1 className="title"><a href="/">Electric</a></h1>
            <div className="navBar">
                <a href="/about" className="navLink">
                    <strong>About</strong>
                </a>
                
                <a href="/contact" className="navLink">
                    <strong>Contact</strong>
                </a>

                <a href="/documentation" className="navLink">
                    <strong>Documentation</strong>
                </a>

                <a href="/download" className="navLink">
                    <strong>Download</strong>
                </a>
            </div>
        </div>
    );
}

export default Header;