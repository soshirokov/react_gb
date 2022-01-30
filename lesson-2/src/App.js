import { useState, useEffect } from 'react';
import Message from './components/Message';
import './app.scss';
import MessageList from './components/MessageList';
import MessageForm from './components/MessageForm';

function App() {
  const [messageList, setmessageList] = useState([]);

  function addUserMessage(message) {
    setmessageList([...messageList, {
      id: messageList.length + 1,
      author: 'User',
      text: message,
      data: (new Date()).toLocaleDateString('ru-RU', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
      })
    }]);
  }

  function addBotMessage() {
    setmessageList(prevState => {
      return [...prevState, {
        id: prevState.length + 1,
        author: 'Bot',
        text: 'Hello User!',
        data: (new Date()).toLocaleDateString('ru-RU', {
          year: 'numeric',
          month: '2-digit',
          day: '2-digit',
        })
      }]
    });
  }

  useEffect(() => {
    if (messageList.length === 0 || messageList[messageList.length - 1].author === 'Bot') return;

    setTimeout(addBotMessage, 1500)
  }, [messageList])

  return (
    <div className="App">
      <header className="App__header">
        <h1>GB React</h1>
      </header>
      <div className='App__body'>
        <div className='App__content'>
          <MessageForm addUserMessage={addUserMessage}></MessageForm>
          <MessageList list={messageList}></MessageList>
        </div>
      </div>
    </div>
  );
}

export default App;
