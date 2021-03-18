import React from 'react'
import './EventCard.scss';

function EventCard(props) {
    return (
        <div className="info">

            <div className="calendar">
                <p className="date">{props.date}</p>
                <div className="month">
                    <p>{props.month}<br />{props.year}</p>
                </div>
            </div>

            <div className="additional-detail">
                <h3 className="title">{props.title}</h3>
                <p className="description">{props.description}</p>
            </div>

            <div class="clear-float"></div>

        </div>
    );
}

export default EventCard;