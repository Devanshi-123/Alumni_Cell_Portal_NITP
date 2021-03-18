import React from "react";
import "./Nav.css"

function Nav() {
    return (<div className="container-fluid">
        <div className="row">
            <div className="col-6">
                <h1 className="thicker">ALUMNI <span className="cell">CELL</span></h1>
                <p className="thick">National Institute Of Technology Patna</p>
            </div>
            <div className="col-2 orange-box box ">
                <a href="#">Menu</a>
            </div>
            <div className="col-2 yellow-box box">
                <a href="#">Register</a>
            </div>
            <div className="col-2 black-box box">
                <a href="#">Contact Us</a>
            </div>

        </div>
    </div>

    );
}
export default Nav;