import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { Link, Outlet } from "react-router-dom";
import CloseIcon from '@mui/icons-material/Close';
import Button from '@mui/material/Button';
import './style.scss';

export const ChatList = ({ chats, addNewChat, deleteChatById }) => {
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