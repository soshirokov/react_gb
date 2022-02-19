import { useParams, Navigate } from "react-router-dom";
import { addChat, deleteChat } from '../../store/chats/actions';
import { selectChats } from '../../store/chats/selectors';
import { connect } from 'react-redux';
import { ChatList } from './ChatListPresentation';

 export const ChatListContainerToConnect = ({ chats, removeChat, addChats }) => {
    const {chatId} = useParams();
    
    if (chatId !== undefined && !chats.hasOwnProperty(chatId)) {
      return <Navigate to="/chats/" replace />;
    }

    function deleteChatById(id) {
      removeChat(id);
    }

    function addNewChat() {
      addChats();
    }

    return(
      <ChatList chats={chats} deleteChatById={deleteChatById} addNewChat={addNewChat} />
    );
 } 

 const mapStateToProps = (state) => ({
  chats: selectChats(state)
});

const mapDispatchToProps = {
  removeChat: deleteChat,
  addChats: () => addChat
};

export const ChatListContainer = connect(mapStateToProps, mapDispatchToProps)(ChatListContainerToConnect);