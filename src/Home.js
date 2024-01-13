import { useState } from "react";
import listImage from "./images/icon-list.svg";

const Home = ({ email, handleOnChange, toggleClick }) => {
  const [error, setError] = useState(false);

  const validateEmail = (email) => {
    return /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);
  };

  const handleOnClick = () => {
    if (validateEmail(email)) {
      setError(false);
      toggleClick();
    } else {
      setError(true);
    }
  };

  return (
    <div id="card">
      <div id="info">
        <h1>Stay updated!</h1>
        <p>Join 60,000+ product managers receiving monthly updates on:</p>
        <ul>
          <li>
            <img src={listImage} alt="check" />
            <p>Product discovery and building what matters</p>
          </li>
          <li>
            <img src={listImage} alt="check" />
            <p>Measuring to ensure updates are a success</p>
          </li>
          <li>
            <img src={listImage} alt="check" /> <p>And much more!</p>
          </li>
        </ul>
        <div id="label-and-input">
          <div id="labels">
            <span>Email Address</span>
            <span className={error ? "error-message" : "hide"}>
              Valid Email Required
            </span>
          </div>
          <input
            type="text"
            id="email-input"
            className={error ? "error-input" : "no-error-input"}
            placeholder="email@company.com"
            onChange={handleOnChange}
            value={email}
          />
        </div>
        <button onClick={handleOnClick}>Subscribe to monthly newsletter</button>
      </div>
      <div id="fm-image-container"></div>
    </div>
  );
};

export default Home;
