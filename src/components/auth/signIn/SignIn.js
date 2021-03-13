import React, { useState } from 'react'
import { auth } from '../../../helper/Firebase';
import { useHistory } from 'react-router-dom';
import './SignIn.scss';

function SignIn() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = () => {
        auth.signInWithEmailAndPassword(email, password).then(res => {
            history.push('/main');
            //do something else with the response
        }).catch(err => {
            //do something with the error
        })
    }

    return (
        <div className='signIn'>
        <h2>Welcome Back !</h2>
            <p >Log in to your account</p>
            <input type='text' placeholder='Email Address' value={email} onChange={e => setEmail(e.currentTarget.value)} />
            <input type='password' placeholder='Password' value={password} onChange={e => setPassword(e.currentTarget.value)} />
            <button  onClick={signIn}>Sign In</button>
            <a href="#">Forgot Password ?</a>
        </div>
    )
}

export default SignIn
