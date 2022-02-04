import { useState } from 'react';
import ReactDOM from 'react-dom';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './style.scss';

export default function MessageForm({ addMessage }) {
    const [value, setValue] = useState('');

    function submitHandler(e) {
        e.preventDefault();
        addMessage(value, 'User');
        setValue('');
    }

    function inputChangeHandler(e) {
        setValue(e.target.value);
    }

    return (
        <div className='form' onSubmit={submitHandler}>
            <form>
                <TextField className='form__input' id="standard-basic" label="Type something..." value={value} variant="standard" onChange={inputChangeHandler}  autoFocus/>
                <Button className='form__submit' variant="contained" type='submit'>Send</Button>
            </form>
        </div>
    );
}