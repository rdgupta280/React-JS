import logo from './logo.svg';
import './App.css';
import Increasebutton from './component/counterApp/increaseButton';
import DecreaseButton from './component/counterApp/decreaseButton';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <Increasebutton />
       <DecreaseButton />
      </header>
    </div>
  );
}

export default App;
