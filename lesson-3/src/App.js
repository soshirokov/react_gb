import { useState, useEffect } from 'react';
import './app.scss';
import MessageList from './components/MessageList';
import MessageForm from './components/MessageForm';
import ChatList from './components/ChatList';

function App() {
  const [messageList, setmessageList] = useState([]);

  const chatList = [
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
  ];

  function addMessage(message, author) {
    setmessageList(prevState => {
      return [...prevState, {
        id: prevState.length + 1,
        author: author,
        text: message,
        data: (new Date()).toLocaleDateString('ru-RU', {
          year: 'numeric',
          month: '2-digit',
          day: '2-digit',
        })
      }];
    });
  }

  useEffect(() => {
    if (messageList.length === 0 || messageList[messageList.length - 1].author === 'Bot') return;

    const botMsgTimer = setTimeout(() => addMessage('Hello user!', 'Bot'), 1500);

    return ()=>{ clearTimeout(botMsgTimer); };
  }, [messageList])

  return (
    <div className="App">
      <header className="App__header">
        <h1>GB React</h1>
      </header>
      <div className='App__body'>
        <div className='App__wrapper'>
          <div className='App__sidebar'>
            <ChatList chatlist={chatList} />
          </div>
          <div className='App__content'>        
            <MessageList list={messageList} />
            <MessageForm addMessage={addMessage} /> 
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;