import React from "react";
import "./hds.css";

function Head2(props) {
    return (<div className="head-div">
        <div className="head-colorbox"></div>
        <div className="make-inline"><h2 className="head-title">{props.title}</h2></div>
    </div>

    );
}
export default Head2;