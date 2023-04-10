import "./App.css";

function MyComponent() {
  return (
    <div>
      <button>{1 + 2}</button>
      <br />
      <button>{Date.now()}</button>
      <br />
      <button>{10 / 5}</button>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <MyComponent />
    </div>
  );
}

export default App;
