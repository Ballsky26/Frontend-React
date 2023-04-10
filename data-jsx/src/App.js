import "./App.css";

const gamepadData = [
  { name: "Dualshock 3", price: 300000, discount: 30 },
  { name: "Dualshock 4", price: 800000, discount: 40 },
  { name: "Dualshock 5", price: 1500000, discount: 50 },
  { name: "Dualshock 6", price: 1700000, discount: 60 },
];

function Product({ price, name, discount = 0 }) {
  return (
    <div className="App">
      <h2>{name}</h2>
      <p>
        <s>Rp. {price}</s> ({discount}%)
      </p>
      <p>
        <b>
          Rp {parseInt(price) - parseInt(price) * (parseInt(discount) / 100)}{" "}
        </b>
      </p>
      <hr />
    </div>
  );
}

function App() {
  return (
    <div>
      {gamepadData.map((stik, id) => (
        <Product
          key={id}
          name={stik.name}
          price={stik.price}
          discount={stik.discount}
        ></Product>
      ))}
    </div>
  );
}
// function App() {
//   return (
//     <div className="App">
//       <Product name="DualShock 4" price="700000" discount="50" />
//       <Product name="DualShock 5" price="1500000" discount="30" />
//       <Product name="DualShock 6" price="1800000" discount="20" />
//     </div>
//   );
// }

export default App;
