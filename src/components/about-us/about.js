import React, { useEffect } from 'react'
import './about.scss';
import { auth } from '../../helper/Firebase';
import { useHistory } from 'react-router-dom';

const About = () =>
    (
<div className='whole'>
    <div className='bar'></div>
<div className='sidebar'></div>
<text className='about'>About Us</text>
<text className='kam'>Dr. Kamini Sinha</text>
<text className='san'>Dr. Sanjay Kumar</text>

<div className='dnb'></div>
<text className='dean'> Dean Office </text>
<div className='pb1'></div>
<div className='pb2 '></div>

</div>






    )
export default About;
