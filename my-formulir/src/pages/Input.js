import { useState } from "react";

function Input() {
  const [name, setName] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Nama anda adalah : ${name}`);
  };
  return (
    <form>
      <label>
        Enter Your Name : <br />{" "}
      </label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <br />
    </form>
  );
}

export default Input;
