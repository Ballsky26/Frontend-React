import { useState, useEffect } from "react";

function Timers() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);
  }, []); // Menambahkan ARRAY kosong akan memberhentikan waktu
  return <h1>STOPWATCH : {count} Seconds </h1>;
}

export default Timers;
