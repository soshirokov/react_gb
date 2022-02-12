import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { Link, Outlet, useParams, Navigate } from "react-router-dom";
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';
import './style.scss';
import Button from '@mui/material/Button';

 export default function ChatList () {
    const [chatList, setChatList] = useState([
      {
        name: 'Chat 1',
        id: 'chat_1' 
      },
      {
        name: 'Chat 2',
        id: 'chat_2' 
      },
      {
        name: 'Chat 3',
        id: 'chat_3' 
      }
    ]);
    const [countChats, setCountChats] = useState(chatList.length);


    const {chatId} = useParams();
    
    if (chatId !== undefined && chatList.findIndex(chat => chat.id === chatId) === -1) {
      return <Navigate to="/chats/" replace />;
    }

    function deleteChat(id) {
      setChatList(prevState => prevState.filter(chat => chat.id !== id));
    }

    function addChat() {
      setChatList(prevState => [...prevState, {
        name: 'Chat ' + (countChats + 1),
        id: 'chat_' + (countChats + 1)
      }]);

      setCountChats(prevCount => ++prevCount);
    }

    return(
      <>
      <div className='chatList'>
          <List>
              {chatList.map(chat => {
                  return (
                  <ListItemButton component={Link} key={chat.id} to={"/chats/" + chat.id}>
                      <ListItemText primary={chat.name} />
                      <CloseIcon onClick={() => deleteChat(chat.id)}/>
                  </ListItemButton>);
              })}
          </List>
          <Button onClick={addChat}>+ add chat</Button>
      </div>
      <Outlet />
      </>
    );
 } 