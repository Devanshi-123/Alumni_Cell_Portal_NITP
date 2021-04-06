import React from 'react';
import Head from "../head/Head";

import './Core.scss';

function Core() {
    return (
        <>
            <Head title="Our Core" />
            <div className="core">
                <div class="core-message">
                    <p>Alumni Cell, NIT Patna is an official body working under the tutelage of Dean Alumni Affairs’ office NIT Patna.</p>
                    <p>The association endeavours to strengthen the relationship of alumni and its alma mater.</p>
                </div>
                <div className='tag-background'>
                    <p>We Carry Traditions</p>
                </div>
            </div>
        </>
    );
}

export default Core;