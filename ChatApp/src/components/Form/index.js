 import TextField from '@mui/material/TextField';
 import Button from '@mui/material/Button';
 import './style.scss';
import { useState } from 'react';

 export const Form = ({onSubmitCallback, placeholder, submitText}) => {
    const [value, setValue] = useState('');
    
    function submitHandler (e) {
        e.preventDefault();
        onSubmitCallback(value);
        setValue('');
    }

    function inputChangeHandler(e) {
        setValue(e.target.value);
    }

     return (
         <div className='form' onSubmit={submitHandler}>
             <form>
                 <TextField data-testid="messageTextField" className='form__input' id="standard-basic" label={placeholder} value={value} variant="standard" onChange={inputChangeHandler}  autoFocus/>
                 <Button className='form__submit' variant="contained" type='submit'>{submitText}</Button>
             </form>
         </div>
     );
 } 