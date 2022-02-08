import { useEffect, useRef } from 'react';
import Message from '../Message';
import './style.scss';

 export default function MessageList({ list }) {
     const messages = useRef();

     useEffect(()=>{
         messages.current?.scrollIntoView();
     }, [list]);

     console.log(list);

     return (
         <div className='MessageList'>
             {list.map(msg => {
                 return <Message text={msg.text} author={msg.author} data={msg.data} key={msg.id}></Message>
             })}
             <div ref={messages} />
         </div>
     );
 } 