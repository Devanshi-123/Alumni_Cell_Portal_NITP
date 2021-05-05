import React from 'react'
import './EventCard.scss';

function EventCard(props) {
    return (
        <div id="card" className="grid">
            <div id="calendar" className="grid">
                <p>{props.date}</p>
                <div>
                    <p>{props.month}</p>
                    <p>{props.year}</p>
                </div>
            </div>
            <div id="info">
                <h3>{props.title}</h3>
                <p>{props.description}</p>
            </div>
        </div>
    );
}
export default EventCard;