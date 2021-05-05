import React from 'react'
import './EventInFocus.scss';

function EventInFocus(props) {
    return (
        <div id="focused" className="grid">
            <div>
                <img src={props.imgSrc} alt={"Event Logo" + props.title} />
            </div>
            <div>
                <h3>{props.title}</h3>
                <p>{`${props.day}, ${props.month} ${props.date}, ${props.year}`}</p>
                <p>{`${props.time}`}</p>
                <p>{props.description}</p>
            </div>
        </div>
    );
} 

export default EventInFocus;