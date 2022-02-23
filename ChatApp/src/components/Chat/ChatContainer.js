import { useCallback } from 'react';
import { useParams } from "react-router-dom";
import { connect } from 'react-redux';
import { addMessageThunk } from '../../store/chats/actions';
import { selectChats } from '../../store/chats/selectors';
import { selectName } from '../../store/profile/selectors';
import { Chat } from './ChatPresentation';

const ChatContainerToConnect = ({chats, name, sendMessage}) => {
    const {chatId} = useParams();

    const addNewMessage = useCallback((message, author = name) => {
      sendMessage({
        chatId: chatId,
        author: author,
        message: message
      });
    }, [name, chatId, sendMessage]);
    
    return(
        <Chat chats={chats} addNewMessage={addNewMessage} chatId={chatId}/>
    );
}

const mapStateToProps = (state) => ({
  chats: selectChats(state),
  name: selectName(state)
});

const mapDispatchToProps = {
  sendMessage: addMessageThunk
};

export const ChatContainer = connect(mapStateToProps, mapDispatchToProps)(ChatContainerToConnect);