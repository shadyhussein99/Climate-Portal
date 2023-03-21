
// Navbar of the website

import React from "react"
import { Link } from "react-router-dom";

function Navbar() {
    return <div>
        <nav className="navbar navbar-expand-lg navbar-dark">
            <Link className="nav-heading" to="/"><img className="earth-img" src="/pics/earth.jpeg" alt="earth-img" /> Climate Portal</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/reports">Reports</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/science">Science</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/about">About</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/login">Login</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link register" to="/register">Register</Link>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
}

export default Navbar
