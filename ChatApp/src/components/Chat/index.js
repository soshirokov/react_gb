import { useCallback, useEffect } from 'react';
import { MessageForm } from '../MessageForm';
import { MessageList } from '../MessageList';
import { useParams } from "react-router-dom";
import './style.scss';
import { connect } from 'react-redux';
import { addMessage } from '../../store/chats/actions';
import { selectChats } from '../../store/chats/selectors';
import { selectName } from '../../store/profile/selectors';

const ChatToConnect = ({chats, name, sendMessage}) => {
    const {chatId} = useParams();

    const addNewMessage = useCallback((message, author = name) => {
      sendMessage({
        chatId: chatId,
        author: author,
        message: message
      });
    }, [name, chatId]);

    useEffect(() => {
      if (!chats.hasOwnProperty(chatId) || !chats[chatId].messages.length || chats[chatId].messages[chats[chatId].messages.length - 1]?.author === 'Bot') return;
  
      const botMsgTimer = setTimeout(() => addNewMessage(`Hello ${name}!`, 'Bot'), 1500);
  
      return () => { clearTimeout(botMsgTimer); };
    }, [chats]);

    
    return(
        <div className='Chat'>        
            {chats[chatId]?.messages.length ? <MessageList list={chats[chatId].messages} /> : <div className='error'>No messages...</div>}
            <MessageForm addMessage={addNewMessage} /> 
          </div>
    );
}

const mapStateToProps = (state) => ({
  chats: selectChats(state),
  name: selectName(state)
});

const mapDispatchToProps = {
  sendMessage: addMessage
};

export const Chat = connect(mapStateToProps, mapDispatchToProps)(ChatToConnect);