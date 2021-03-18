import React from 'react'
import './EventInFocus.scss';

function EventInFocus(props) {
    return (
        <div className="event-in-focus">

            <div className="event-poster">
                <img src={props.imgSrc} alt={"Logo" + props.title} />
            </div>

            <div className="event-info">
                <h3 className="event-title">{props.title}</h3>
                <p className="event-calendar">{`${props.day}, ${props.month} ${props.date}, ${props.year}`}</p>
                <p className="event-time">{`${props.time}`}</p>
                <p className="event-description">{props.description}</p>
            </div>

            <div class="clear-float"></div>

        </div>
    );
}

export default EventInFocus;