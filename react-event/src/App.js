import "./App.css";

// ADD EVENT AND EVENT OBJECT

// function Football() {
//   const shoot = () => {
//     alert("GOAAALLL!!");
//   };
//   return <button onClick={shoot}>Take the Shoot</button>;
// }

// With Argument
// function Football(a) {
//   const shoot = (a) => {
//     alert(a);
//   };
//   return <button onClick={() => shoot("GOAAAALLLL!!")}>Take the Shoot</button>;
// }

// With Event Object
// function Football() {
//   const shoot = (a, b) => {
//     alert(b.type);
//   };
//   return (
//     <button onClick={(event) => shoot("GOAAAALLLL!!", event)}>
//       Take the Shoot
//     </button>
//   );
// }

// CONDITIONAL RENDERING

// If
// function MissedGoal() {
//   return <h1>MISSED!</h1>;
// }
// function MadeGoal() {
//   return <h1>GOALLL!!!</h1>;
// }
// function Goal(props) {
//   const isGoal = props.isGoal;
//   if (isGoal) {
//     return <MadeGoal />;
//   }
//   return <MissedGoal />;
// }

// Logical && Operator
// function Garage(props) {
//   const cars = props.cars;
//   return (
//     <>
//       <h1>Garage</h1>
//       {cars.length > 0 && <h2>You have {cars.length} cars in your garage</h2>}
//     </>
//   );
// }
// const cars = ["Ford", "BMW", "HONDA"];

// Ternary Operation
function MissedGoal() {
  return <h1>MISSED!</h1>;
}
function MadeGoal() {
  return <h1>GOALLL!!!</h1>;
}
function Goal(props) {
  const isGoal = props.isGoal;
  return <>{isGoal ? <MadeGoal /> : <MissedGoal />}</>;
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <Garage cars={cars} />
//       </header>
//     </div>
//   );
// }

function App() {
  return (
    <div className="App">
      <header className="App-header">{<Goal isGoal={true} />}</header>
    </div>
  );
}

export default App;
