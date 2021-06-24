import React from 'react';
import Head2 from "../head/hds";

import './Core.scss';

function Core() {
    return (
        <>
            <Head2 title="Our Core" />
            <div className="core">
                <div class="core-message" style={{fontFamily:"Calibri", marginTop:"80px"}}>
                    <p>Alumni Cell, NIT Patna is an official body working under the tutelage of Dean Alumni Affairs’ office NIT Patna.</p>
                    <p>The association endeavours to strengthen the relationship of alumni and its alma mater.</p>
                </div>
                <div className='tag-background' style={{borderRadius:"10px 10px 10px 10px"}}>
                    <p style={{color:"white"}}>We Carry Traditions</p>
                </div>
            </div>
        </>
    );
}

export default Core;