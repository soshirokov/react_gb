import { useEffect, useRef } from 'react';
import { Message } from '../Message';
import './style.scss';

 export const MessageList = ({ list }) => {
     const messages = useRef();

     useEffect(()=>{
         messages.current?.scrollIntoView();
     }, [list]);

     return (
         <div className='MessageList'>
             {list.map(msg => {
                 return <Message text={msg.text} author={msg.author} date={msg.date} key={msg.id}></Message>
             })}
             <div ref={messages} />
         </div>
     );
 } 