import logo from './logo.svg';
import './App.css';
import Increasebutton from './component/counterApp/increasebutton';
import DecreaseButton from './component/counterApp/decreasebutton';

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
