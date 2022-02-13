import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { Link, Outlet, useParams, Navigate } from "react-router-dom";
import CloseIcon from '@mui/icons-material/Close';
import './style.scss';
import Button from '@mui/material/Button';
import { addChat, deleteChat } from '../../store/chats/actions';
import { selectChats } from '../../store/chats/selectors';
import { connect } from 'react-redux';

 export const ChatListToConnect = ({ chats, removeChat, addChats }) => {
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
      <>
      <div className='chatList'>
          <List>
            {Object.keys(chats).map(chatId => {
              return (
                <ListItemButton component={Link} key={chatId} to={"/chats/" + chatId}>
                    <ListItemText primary={chats[chatId].name} />
                    <CloseIcon onClick={() => deleteChatById(chatId)}/>
                </ListItemButton>);
            })}
          </List>
          <Button onClick={addNewChat}>+ add chat</Button>
      </div>
      <Outlet />
      </>
    );
 } 

 const mapStateToProps = (state) => ({
  chats: selectChats(state)
});

const mapDispatchToProps = {
  removeChat: deleteChat,
  addChats: () => addChat
};

export const ChatList = connect(mapStateToProps, mapDispatchToProps)(ChatListToConnect);