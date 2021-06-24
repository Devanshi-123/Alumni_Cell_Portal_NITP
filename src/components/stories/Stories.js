import "./Stories.css";
import React from "react";
import Story from "./Story";
import Head from '../head/hds';

function Stories() {
    return (
        <div>

            <div style={{marginBottom:"80px"}}>  <Head
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
