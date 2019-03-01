import React from "react";
import { NavLink } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

function Nav() {
    
    const guest = (
        <ul className="navbar-nav ml-auto">
            <li className="nav-item mr-2">
                <NavLink to="/login" className="btn btn-outline-primary">Login</NavLink>
            </li>
            <li className="nav-item">
                <NavLink to="/signup" className="btn btn-primary">Signup</NavLink>
            </li>
        </ul>
    );

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <NavLink to="/" className="navbar-brand">Fake Reddit</NavLink>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#myNavBar" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="myNavBar">
                    {guest}
                </div>
            </nav>
    )

}

export default Nav;