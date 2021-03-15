import React from "react";
import "./Head.css";

function Head(props) {
    return (<div className="head-div">
          <div className="head-colorbox"></div>
            <div className="make-inline"><h2 className="head-title">{props.title}</h2></div>
        </div>

    );
}
export default Head;