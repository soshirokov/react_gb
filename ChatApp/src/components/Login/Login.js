import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import TextField from '@mui/material/TextField';
import { Navigate } from 'react-router-dom'
import './style.scss';

export const Login = ({authed, loginHandler, email, emailChangeHandler, pass, passChangeHandler, signUpHendler, err, isSignUp}) => {
    if (authed) {
        return (
            <Navigate to="/" replace />
        );
    }

    return (
        <>
            <Card className="login">
                <CardContent>
                    <h2>Sign In or Sign Up</h2>
                    <form onSubmit={loginHandler}>
                        <TextField className='login__input' label="Login" value={email} variant="standard" onChange={emailChangeHandler}  autoFocus/>
                        <TextField className='login__input' label="Password" value={pass} variant="standard" type="password" onChange={passChangeHandler} />
                        <FormControlLabel className='login__checkbox' control={<Checkbox />} onChange={signUpHendler} label="Sing Up" />
                        <Button className='login__submit' variant="contained" type="submit">{isSignUp ? "Sign Up" : "Sign In"}</Button>
                        {err && <div className='login__error'>{err}</div>}
                    </form>
                </CardContent>
            </Card>
        </>
    );
}