import { MessageForm } from '../MessageForm';
import { MessageList } from '../MessageList';
import './style.scss';

export const Chat = ({chats, addNewMessage, chatId}) => {
    return(
        <div className='Chat'>        
            {chats[chatId]?.messages.length ? <MessageList list={chats[chatId].messages} /> : <div className='error'>No messages...</div>}
            <MessageForm addMessage={addNewMessage} /> 
          </div>
    );
}