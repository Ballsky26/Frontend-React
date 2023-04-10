import "./App.css";

// React List
// function Car(props) {
//   return <li>I am a {props.brand}</li>;
// }
// function Garage() {
//   const cars = ["BMW", "AUDI", "HONDA"];
//   return (
//     <>
//       <h1>Who Lives in my Garage</h1>
//       <ul>
//         {cars.map((car) => (
//           <Car brand={car} />
//         ))}
//       </ul>
//     </>
//   );
// }

// React Key dalam List
// function Car(props) {
//   return <li>I am a {props.brand}</li>;
// }
// function Garage() {
//   const cars = [
//     { id: 1, brand: "Ford" },
//     { id: 2, brand: "Bmw" },
//     { id: 3, brand: "Honda" },
//     { id: 4, brand: "Audi" },
//   ];
//   return (
//     <>
//       <h1>Who Lives in my Garage</h1>
//       <ul>
//         {cars.map((car) => (
//           <Car key={car.id} brand={car.brand} />
//         ))}
//       </ul>
//     </>
//   );
// }

// Inline Styling
// const Header = () => {
//   return (
//     <>
//       <h1 style={{ color: "red" }}>Hello World</h1>
//       <p>Add a little World</p>
//     </>
//   );
// };

// camelCase Property Name
// const Header2 = () => {
//   return (
//     <>
//       <h1 style={{ backgroundColor: "salmon" }}>Hello World</h1>
//       <p>Add a little World</p>
//     </>
//   );
// };

// Javascript Object
const Header = () => {
  const myStyle = {
    color: "Black",
    backgroundColor: "Salmon",
    padding: "10px",
    fontFamily: "Sans-Serif",
  };
  return (
    <>
      <h1 style={myStyle}>Hello World</h1>
      <p>Add a little World</p>
    </>
  );
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
    </div>
  );
}

export default App;
