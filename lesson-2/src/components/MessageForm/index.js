import { useState } from 'react';
import './style.scss';

export default function MessageForm({ addUserMessage }) {
    const [value, setValue] = useState('');

    function submitHandler(e) {
        e.preventDefault();
        addUserMessage(value);
        setValue('');
    }

    function inputChangeHandler(e) {
        setValue(e.target.value);
    }

    return (
        <div className='form' onSubmit={submitHandler}>
            <form>
                <input className='form__input' type='text' value={value} onChange={inputChangeHandler}></input>
                <button className='form__submit' type='submit'>Send</button>
            </form>
        </div>
    );
}