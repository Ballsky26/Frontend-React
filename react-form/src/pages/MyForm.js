import { useState } from "react";

function MyForm() {
  const [name, setName] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Nama anda adalah : ${name}`);
  };
  return (
    // Submitting Form
    <form onSubmit={handleSubmit}>
      <label>Enter Your Name </label> <br />
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input type="submit"></input>
    </form>

    // Handling Form
    // <form>
    //   <label>Enter Your Name </label> <br />
    //   <input
    //     type="text"
    //     value={name}
    //     onChange={(e) => setName(e.target.value)}
    //   />
    // </form>
  );
}

export default MyForm;
