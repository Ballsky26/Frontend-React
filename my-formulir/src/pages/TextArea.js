import { useState } from "react";

function TextArea() {
  const [textarea, setTextarea] = useState("Ini adalah Content sementara");

  const handleChange = (event) => {
    setTextarea(event.target.value);
  };
  return (
    <form>
      <label>
        Enter Your Feedback : <br />
      </label>
      <textarea value={textarea} onChange={handleChange} />
      <br />
    </form>
  );
}
export default TextArea;
