import React from 'react';
import Head from "../head/Head";
import EventCard from './eventCard/EventCard';
import EventInFocus from './eventInFocus/EventInFocus';
import EventData from './eventData/EventData';

import './Event.scss';

function Event() {
    return (
        <>
            <Head title="EVENTS" />

            <div className="event">

                <div className="all-events">
                    <h2 className="header-block">ALL EVENTS</h2>
                    <div className="event-cards">
                        {
                            EventData.slice(0, 3).map((data) => {
                                return (
                                    <EventCard
                                        key={data.id}
                                        date={data.date}
                                        month={data.month}
                                        year={data.year}
                                        title={data.title}
                                        description={data.short_description}
                                    />
                                );
                            })
                        }
                    </div>
                </div>

                <div class="clear-float"></div>

                <div className="event-selected">
                    <EventInFocus
                        day={EventData[0].day}
                        date={EventData[0].date}
                        month={EventData[0].month}
                        year={EventData[0].year}
                        time={EventData[0].time}
                        title={EventData[0].title}
                        description={EventData[0].long_description}
                        imgSrc={EventData[0].imgSrc}
                    />
                </div>

            </div>
        </>
    );
}

export default Event;