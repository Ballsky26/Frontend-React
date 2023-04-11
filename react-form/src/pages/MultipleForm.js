import { useState } from "react";

function MultipleForm() {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Data anda Tersimpan");
    console.log(inputs);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Username : </label>
      <input
        type="text"
        name="username"
        value={inputs.username || ""}
        onChange={handleChange}
      />
      <br />
      <label>Age : </label>
      <input
        type="number"
        name="age"
        value={inputs.age || ""}
        onChange={handleChange}
      />
      <br />
      <input type="submit" />
    </form>
  );
}

export default MultipleForm;
