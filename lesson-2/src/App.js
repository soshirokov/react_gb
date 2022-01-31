import { useState, useEffect } from 'react';
import './app.scss';
import MessageList from './components/MessageList';
import MessageForm from './components/MessageForm';

function App() {
  const [messageList, setmessageList] = useState([]);

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
        <div className='App__content'>
          <MessageForm addMessage={addMessage} />          
          <MessageList list={messageList} />
        </div>
      </div>
    </div>
  );
}

export default App;
