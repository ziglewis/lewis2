import logo from './logo.svg';
import './App.css';

function App() {

    const myName = "ZigLewis"

    const handleNameChanging = () => {
      const names = ["John", "Ada", "Philip", "Junior", "Ifeoma", "Mathew"]
      const randomName = Math.floor((Math.random()) * 6 )
      return names[randomName]
    }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          I Zigede Lewis Junior set up React locally for the first time. Hurray!
        </p>
        <p> For short call me {myName}</p>
        <p>I wish to recommend these two random friends of mine for you: {handleNameChanging()} and {handleNameChanging()} for employment.</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
