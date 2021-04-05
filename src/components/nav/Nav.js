import React from "react";
import { Link } from 'react-router-dom';
import "./Nav.css"

function Nav() {
    return (<div className="container-fluid">
        <div className="row">
            <div className="col-md-6 col-12 logo">
                <h1 className="thicker">ALUMNI <span className="cell">CELL</span></h1>
                <p className="thick">National Institute Of Technology Patna</p>
            </div>
            <div className="col-md-2 col-4 orange-box box ">
                <Link to="/event">Menu</Link>
            </div>
            <div className="col-md-2 col-4 yellow-box box">
                <Link to="/auth">Register</Link>
            </div>
            <div className="col-md-2 col-4 black-box box">
                <Link to="/core">Contact Us</Link>
            </div>

        </div>
    </div>

    );
}
export default Nav;