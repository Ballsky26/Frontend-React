import { useState } from "react";

function FavoriteColor() {
  //   const [brand, setBrand] = useState("Ford");
  //   const [model, setModel] = useState("Mustang GT");
  //   const [year, setYear] = useState("1964");
  //   const [color, setColor] = useState("Red");

  //   One State and include an Object
  const [car, setCar] = useState({
    brand: "Ford",
    model: "Mustang GT",
    year: 1965,
    color: "Red",
  });

  //   Change Object dan Array
  const updateColor = () => {
    setCar((previousState) => {
      return { ...previousState, color: "Blue" };
    });
  };

  const updateYear = () => {
    setCar((previousState) => {
      return { ...previousState, year: "2023" };
    });
  };

  //   return (
  //     <>
  //       <h1>My Favorite Color {color}</h1>
  //       <button type="button" onClick={() => setColor("Blue")}>
  //         Change Color
  //       </button>
  //     </>
  //   );

  //   return (
  //     <>
  //       <h1>My Brand {brand}</h1>
  //       <p>
  //         It is a {color} {model} from {year}
  //       </p>
  //     </>
  //   );
  return (
    <>
      <h1>My Brand {car.brand}</h1>
      <p>
        It is a {car.color} {car.model} from {car.year}
      </p>
      <button type="button" onClick={updateColor}>
        Update Color
      </button>
      <br />
      <button type="button" onClick={updateYear}>
        Update year
      </button>
    </>
  );
}

export default FavoriteColor;
