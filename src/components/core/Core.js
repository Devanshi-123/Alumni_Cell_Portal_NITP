import React from 'react';
import Head from "../head/Head";

import './Core.scss';

function Core() {
    return (
        <>
            <Head title="OUR CORE" />
            <div class="clear-float-both"></div>

            <div className="core">
                <p class="core-message"><span class="first-letter">A</span>lumni Cell, NIT Patna is an official body working under the tutelage of Dean Alumni Affairs’ office NIT Patna.</p>
                <p class="core-message">The association endeavours to strengthen the relationship of alumni and its alma mater.</p>
            </div>

            <div className='tag-background'>
                <text className='tagline'>We Carry Traditions</text>
            </div>
        </>
    );
}

export default Core;