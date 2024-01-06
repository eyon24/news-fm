import { useState } from "react";
import "./App.css";
import Home from "./Home";

function App() {
  const [success, setSuccess] = useState(false);
  const [email, setEmail] = useState("");

  const handleOnClick = () => {
    setSuccess(!success);
  };

  const handleOnChange = (e) => {
    setEmail(e.target.value);
  };

  return (
    <main>
      {(success && <div>Good Job</div>) || (
        <Home
          email={email}
          handleOnChange={handleOnChange}
          handleOnClick={handleOnClick}
        />
      )}
    </main>
  );
}

export default App;
