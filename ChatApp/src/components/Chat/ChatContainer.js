import { useCallback, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { connect } from 'react-redux';
import { selectChats } from '../../store/chats/selectors';
import { selectName } from '../../store/profile/selectors';
import { Chat } from './ChatPresentation';
import { set } from 'firebase/database';
import { messageRef } from '../../utils/firebase';
import { initMessagesTracking } from '../../store/chats/actions';

const ChatContainerToConnect = ({chats, name, messageTracking}) => {
    const {chatId} = useParams();

    const addNewMessage = useCallback((message, author = name) => {
      const id = Date.now().toString().slice(-4);

      set(messageRef(chatId, id), {
        id: id,
        author: author,
        text: message,
        date: (new Date()).toLocaleDateString('ru-RU', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        })
      });
    }, [name, chatId]);

    useEffect(() => {
      messageTracking(chatId);
    }, [messageTracking, chatId]);

    return(
        <Chat chats={chats} addNewMessage={addNewMessage} chatId={chatId}/>
    );
}

const mapStateToProps = (state) => ({
  chats: selectChats(state),
  name: selectName(state)
});

const mapDispatchToProps = {
  messageTracking: initMessagesTracking
};

export const ChatContainer = connect(mapStateToProps, mapDispatchToProps)(ChatContainerToConnect);