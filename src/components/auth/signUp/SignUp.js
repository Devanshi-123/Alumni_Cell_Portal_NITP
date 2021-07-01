import React, { useState } from 'react'
import './SignUp.scss';
import { auth } from '../../../helper/Firebase';
import { useHistory } from 'react-router-dom';

function SignUp() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');

    const signUp = () => {
        auth.createUserWithEmailAndPassword(email, password).then(res => {
            history.push('/main');
            //do something with the response
        }).catch(err => {
            //do something with the error
        })
    }
    return (
        <div className='signUp'>
            <h2>Create your Account</h2>
            <p>Connect with your NITP family</p>
            <input type="text" placeholder='Name'  onChange={e => setName(e.currentTarget.value)} />
            <input type='email' placeholder='Email Address' onChange={e => setEmail(e.currentTarget.value)} />
            <input type='password' placeholder='Password' onChange={e => setPassword(e.currentTarget.value)} />
            <input type="password" placeholder='Confirm password' />
            <button onClick={signUp}>Sign Up</button>
        </div>
    )
}

export default SignUp
