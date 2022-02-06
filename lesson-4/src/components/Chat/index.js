import { useState, useEffect } from 'react';
import MessageForm from '../MessageForm';
import MessageList from '../MessageList';
import {useParams} from "react-router-dom";
import './style.scss';

export default function Chat () {
    const [messageList, setmessageList] = useState({});
    const {chatId} = useParams();

    function addMessage(message, author) {
        setmessageList(prevState => {
          return {...prevState,
          [chatId]: prevState[chatId] ? 
          [...prevState[chatId], {
            id: prevState[chatId].length + 1,
            author: author,
            text: message,
            data: (new Date()).toLocaleDateString('ru-RU', {
              year: 'numeric',
              month: '2-digit',
              day: '2-digit',
            })
          }] :
          [{
            id: 1,
            author: author,
            text: message,
            data: (new Date()).toLocaleDateString('ru-RU', {
              year: 'numeric',
              month: '2-digit',
              day: '2-digit',
            })
          }]
          }
        });
      }

      useEffect(() => {
        if (!messageList.hasOwnProperty(chatId) || messageList[chatId][messageList[chatId]?.length - 1]?.author === 'Bot') return;
    
        const botMsgTimer = setTimeout(() => addMessage('Hello user!', 'Bot'), 1500);
    
        return ()=>{ clearTimeout(botMsgTimer); };
      }, [messageList]);

    
    return(
        <div className='Chat'>        
            {messageList[chatId] && <MessageList list={messageList[chatId]} />}
            <MessageForm addMessage={addMessage} /> 
          </div>
    );
}