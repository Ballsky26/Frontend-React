import logo from "./logo.svg";
import "./App.css";
import Title from "./Title";
import Body from "./Body";
import Coba from "./Coba";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Title />
        <Body />
        <Coba />
        <chatBox />
      </header>
    </div>
  );
}

export default App;
