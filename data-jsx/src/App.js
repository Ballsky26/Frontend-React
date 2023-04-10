import logo from "./logo.svg";
import "./App.css";

function Product({ price, name, discount = 0 }) {
  return (
    <div>
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
    <div className="App">
      <Product name="DualShock 4" price="700000" discount="50" />
      <Product name="DualShock 5" price="1500000" discount="30" />
      <Product name="DualShock 6" price="1800000" discount="20" />
    </div>
  );
}

export default App;
