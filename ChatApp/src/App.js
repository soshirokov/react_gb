import './app.scss';
import { ChatList } from './components/ChatList';
import { Chat } from './components/Chat';
import { Profile } from './components/Profile';
import Button from '@mui/material/Button';
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import { Jokes } from './components/Jokes';
import { Login } from './components/Login';
import { PrivateRoute } from './components/PrivateRoutes';
import { useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth, logout } from './utils/firebase';
import { CircularProgress } from '@mui/material';

function App() {
  const [authed, setAuthed] = useState(false);
  const [onAuth, setOnAuth] = useState(false);

  useEffect(()=>{
    setOnAuth(true);
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthed(true);
        setOnAuth(false);
      } else {
        setAuthed(false);
        setOnAuth(false);
      }
    });

    return unsubscribe;
  }, [])

  return (
    <div className="App">
      <header className="App__header">
        <h1>GB React</h1>
      </header>
      <div className='App__body'>
        {onAuth ? 
          <div className='App__wrapper App__wrapper_center'>
            <CircularProgress/>
          </div> : 
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
              <li>
                <NavLink to="/jokes" className='Nav__link'>
                  <Button className='Nav__btn' size='large'>Jokes</Button>
                </NavLink>
              </li>
              <li>
                {authed ?
                  <NavLink to="" className='Nav__link'>
                    <Button className='Nav__btn' size='large' onClick={async () => {
                      try {
                        await logout();
                      } catch(e) {
                        console.warn(e);
                      }
                    }}>Logout</Button>
                </NavLink> 
                : 
                <NavLink to="/login" className='Nav__link'>
                  <Button className='Nav__btn' size='large'>Sign In / Sign Up</Button>
                </NavLink> }
              </li>
            </ul>
            </div>
            <div className='App__wrapper'>
            <Routes>
              <Route path="/" element={<PrivateRoute authed={authed} />}>
                <Route path="" element={<ChatList />} />
              </Route>
              <Route path="chats" element={<PrivateRoute authed={authed} />}>
                <Route path="" element={<ChatList />}>
                  <Route path=":chatId" element={<Chat />} />
                </Route>
              </Route>
              <Route path="profile" element={<PrivateRoute authed={authed} />}>
                <Route path="" element={<Profile />}></Route>
              </Route>
              <Route path="jokes" element={<PrivateRoute authed={authed} />}>
                <Route path="" element={<Jokes />}></Route>
              </Route>
              <Route path="login" element={<Login authed={authed} />}></Route>
              <Route element={<h2>404</h2>} />
            </Routes>
            </div>
          </BrowserRouter>
        }
        </div>
    </div>
  );
}

export default App;