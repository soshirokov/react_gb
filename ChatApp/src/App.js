import './app.scss';
import { ChatList } from './components/ChatList';
import { Chat } from './components/Chat';
import { Profile } from './components/Profile';
import Button from '@mui/material/Button';
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App__header">
        <h1>GB React</h1>
      </header>
      <div className='App__body'>
        <BrowserRouter>
        <div className='App__wrapper'>
          <ul className='Nav'>
            <li>
              <NavLink to="/" className='Nav__link'>
                <Button className='Nav__btn' size='large'>Home</Button>
              </NavLink>
            </li>
            <li>
              <NavLink to="/profile" className='Nav__link'>
                <Button className='Nav__btn' size='large'>My profile</Button>
              </NavLink>
            </li>
          </ul>
          </div>
          <div className='App__wrapper'>
          <Routes>
            <Route path="/" element={<ChatList />} />
            <Route path="chats" element={<ChatList />}>
              <Route path=":chatId" element={<Chat />} />
            </Route>
            <Route path="profile" element={<Profile />}></Route>
            <Route element={<h2>404</h2>} />
          </Routes>
          </div>
      </BrowserRouter>
        </div>
    </div>
  );
}

export default App;