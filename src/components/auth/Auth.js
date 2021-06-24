import React, { useState, useEffect } from 'react'
import SignIn from './signIn/SignIn';
import SignUp from './signUp/SignUp';
import Head from "../head/hds";
import { auth } from '../../helper/Firebase';
import './Auth.scss';
import { useHistory } from 'react-router-dom';

function Auth() {
    const history = useHistory();
    const [authType, setAuthType] = useState('signIn');

    useEffect(() => {
        auth.onAuthStateChanged(user => {
            if (user) history.push('/main')
        })
    }, [])
    

    return (
        <div>
        <Head 
        title={authType==='signIn'?"LOGIN" : "SIGN UP"}
       />
        <div className='auth'>
       
            {authType === 'signIn' ?
                <div className='container'>
                    <SignIn />
                    <p className="auth-p">New here? <span className="change-color" onClick={() => setAuthType('signUp')}>Create account.</span></p>
                </div>
                :
                <div className='container'>
                
                    <SignUp />
                    <p className="auth-p">Have an account? <span className="change-color" onClick={() => setAuthType('signIn')}>Sign In.</span></p>
                </div>
            }
        </div>
        </div>
    )
}

export default Auth
