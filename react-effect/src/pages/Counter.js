import { useState, useEffect } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const [calculation, setCalculation] = useState(0);

  useEffect(() => {
    setCalculation(() => count + 1);
  }, [count]); // Add the count variable here
  return (
    <>
      <p>Count : {count}</p>
      <button onClick={() => setCount((c) => c + 1)}>Tambah +</button>
      <p>Calculation : {calculation}</p>
    </>
  );
}

export default Counter;
