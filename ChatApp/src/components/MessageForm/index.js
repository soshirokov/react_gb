import './style.scss';
import { Form } from '../Form';
import { useSelector } from 'react-redux';

 export const MessageForm = ({ addMessage }) => {
    const { name } = useSelector((state) => state); 
    
    function submitHandler(value) {
         addMessage(value, name);
     }

     return (
        <Form onSubmitCallback={submitHandler} placeholder="Type something" submitText="Send"/>
     );
 } 