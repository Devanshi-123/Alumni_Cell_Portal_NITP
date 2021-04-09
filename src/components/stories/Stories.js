import "./Stories.css";
import React from "react";
import Story from "./Story";
import Head from '../head/Head';

function Stories() {
    return (
        <div>

            <div>  <Head
                title="STORIES"
            /></div>

            <div className="stories">
                <Story pos="left" />
                <Story pos="right" />
            </div>
        </div>
    );
}

export default Stories;
