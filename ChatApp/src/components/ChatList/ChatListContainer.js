import { useParams, Navigate } from "react-router-dom";
import { selectChats } from '../../store/chats/selectors';
import { connect } from 'react-redux';
import { ChatList } from './ChatListPresentation';
import { set } from 'firebase/database';
import { auth, chatRef } from '../../utils/firebase';
import { useEffect } from 'react';
import { initChatsTracking } from '../../store/chats/actions';

 export const ChatListContainerToConnect = ({ chats, chatsTracking }) => {
    const {chatId} = useParams();
    
    function deleteChatById(id) {
      set(chatRef(id), null);
    }

    function addNewChat() {
      const id = Date.now().toString().slice(-4);

      set(chatRef(`chat_${id}`), {
        id: `chat_${id}`,
        name: `Chat ${id}`,
        messages: false,
        userUid: auth.currentUser.uid
      });
    }

    useEffect(() => {
      chatsTracking();
    }, [chatsTracking])

    if (chatId !== undefined && !chats.hasOwnProperty(chatId)) {
      return <Navigate to="/chats/" replace />;
    }

    return(
      <ChatList chats={chats} deleteChatById={deleteChatById} addNewChat={addNewChat} />
    );
 } 

 const mapStateToProps = (state) => ({
  chats: selectChats(state)
});

const mapDispatchToProps = {
  chatsTracking: initChatsTracking
};


export const ChatListContainer = connect(mapStateToProps, mapDispatchToProps)(ChatListContainerToConnect);