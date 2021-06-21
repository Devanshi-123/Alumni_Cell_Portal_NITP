import React from "react";
import { Link } from 'react-router-dom';
import "./Nav.css"

function Nav() {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-6 col-12 logo">
                    <Link to="/">
                        <h1 className="thicker">ALUMNI <span className="cell">CELL</span></h1>
                        <p className="thick">National Institute Of Technology Patna</p>
                    </Link>
                </div>
                <div className="col-md-1 col-2 orange-box box ">
                    <div>
                        <nav className="navbar navbar-expand">
                            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                                <ul className="navbar-nav">
                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle item" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Menu</a>
                                        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                            <Link to="/" className="dropdown-item">Home</Link>
                                            <Link to="/core" className="dropdown-item">Our Core</Link>
                                            <Link to="/event" className="dropdown-item">Events</Link>
                                            <Link to="/stories" className="dropdown-item">Stories</Link>
                                            <Link to="/about" className="dropdown-item">About Us</Link>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>
                <div className="col-md-1 col-2 yellow-box box">
                    <div><Link to="/auth" className="item">Register</Link></div>
                </div>
                <div className="col-md-1 col-2 black-box box">
                    <div><Link to="/" className="item">Contact Us</Link></div>
                </div>
            </div>
        </div>
    );
}
export default Nav;