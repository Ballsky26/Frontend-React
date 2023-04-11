import logo from "./logo.svg";
import "./App.css";
import TextArea from "./pages/TextArea";
import Select from "./pages/Select";
import Input from "./pages/Input";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Input />
        <TextArea />
        <Select />
      </header>
    </div>
  );
}

export default App;
