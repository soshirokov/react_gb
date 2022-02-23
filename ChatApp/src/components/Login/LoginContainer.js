import { useState } from 'react';
import { signIn, signUp } from '../../utils/firebase';
import { Login } from './Login';
import './style.scss';

export const LoginContainer = ({authed}) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [isSignUp, setIsSignUp] = useState(false);
    const [err, setErr] = useState('');

    const emailChangeHandler = (e) => {
        setEmail(e.target.value);
    }

    const passChangeHandler = (e) => {
        setPass(e.target.value);
    }

    const loginHandler = (e) => {
        e.preventDefault();
        setErr('');
        isSignUp ? singUpHendler(email, pass) : singInHendler(email, pass);
    }

    const singUpHendler = async (email, pass) => {
        try {
            await signUp(email, pass);
        } catch(e) {
            setErr(e.message);
        }
    }

    const singInHendler = async (email, pass) => {
        try {
            await signIn(email, pass);
        } catch(e) {
            setErr(e.message);
        }
    }

    const signUpHendler = () => {
        setIsSignUp(prevState => !prevState);
    }

    return (
        <>
            <Login 
                authed={authed} 
                loginHandler={loginHandler}  
                email={email}  
                emailChangeHandler={emailChangeHandler}  
                pass={pass}  
                passChangeHandler={passChangeHandler}  
                signUpHendler={signUpHendler}  
                err={err} 
                isSignUp={isSignUp}
            />
        </>
    );
}