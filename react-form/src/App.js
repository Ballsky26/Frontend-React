import logo from "./logo.svg";
import "./App.css";
import MyForm from "./pages/MyForm";
import MultipleForm from "./pages/MultipleForm";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <MyForm /> */ <MultipleForm />}
      </header>
    </div>
  );
}

export default App;
