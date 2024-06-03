import { useState } from "react";
import Welcome from "./Welcome";

export default function InteractiveWelcome() {
  const [name, setName] = useState("");

  function handleChange(event) {
    console.log(event.target.value);
    setName(event.target.value);
  }

  return (
    <div>
      <input type="text" onChange={handleChange} />
      <div>
        <Welcome name={name} />
      </div>
    </div>
  );
}
