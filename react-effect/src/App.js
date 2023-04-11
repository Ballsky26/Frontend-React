import "./App.css";
import Counter from "./pages/Counter";
import Timers from "./pages/Timers";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Timers />
        <Counter />
      </header>
    </div>
  );
}

export default App;
