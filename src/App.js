// import logo from './logo.svg';
import './App.css';
import Invitation from './Invitation';

function App() {
  return (
    <div>
      <header className="App-header">

      <Invitation
      subject = "Birthday party Invitation"
      Email = "jaGdish@gmail.com"
      personName = "jaGdish "
      event = "birthday part"
      friends = "Ritu , Saurabh , Kartik"
      address = "Green field Avenue"
      />
      </header>
      </div>

    
  );
}

export default App;
