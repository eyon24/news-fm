import { useState } from "react";
import "./App.css";
import Home from "./Home";
import Confirmation from "./Confirmation";

function App() {
  const [success, setSuccess] = useState(false);
  const [email, setEmail] = useState("");

  const toggleClick = () => {
    setSuccess(!success);
  };

  const handleOnChange = (e) => {
    setEmail(e.target.value);
  };

  return (
    <main>
      {(success && (
        <Confirmation email={email} toggleClick={toggleClick} />
      )) || (
        <Home
          email={email}
          handleOnChange={handleOnChange}
          toggleClick={toggleClick}
        />
      )}
    </main>
  );
}

export default App;
