import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import './style.scss';

 export default function ChatList ({chatlist}) {
     return(
     <div className='chatList'>
         <List>
             {chatlist.map(chat => {
                 return (
                 <ListItemButton key={chat.id}>
                     <ListItemText primary={chat.name} />
                 </ListItemButton>);
             })}
         </List>
     </div>);
 } 