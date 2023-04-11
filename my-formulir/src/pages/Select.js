import { useState } from "react";

function Select() {
  const [gender, setGender] = useState("Jenis Kelamin");

  const handleChange = (event) => {
    setGender(event.target.value);
  };

  return (
    <form>
      <label>
        Select Your Gender : <br />
      </label>
      <select value={gender} onChange={handleChange}>
        <option value="Jenis Kelamin">Jenis Kelamin</option>
        <option value="Laki-laki">Laki - Laki</option>
        <option value="Perempuan">Perempuan</option>
      </select>
    </form>
  );
}

export default Select;
