import Message from './components/Message';
import './app.scss';

function App() {
  return (
    <div className="App">
      <header className="App__header">
        <h1>GB React</h1>
      </header>
      <div className='App__body'>
        <div className='App__content'><Message text="hello world"></Message></div>
      </div>
    </div>
  );
}

export default App;
