import listImage from "./images/icon-list.svg";

const Home = ({ email, handleOnChange, handleOnClick }) => {
  return (
    <div id="card">
      <div id="info">
        <h1>Stay updated!</h1>
        <p>Join 60,000+ product managers receiving monthly updates on:</p>
        <ul>
          <li>
            <img src={listImage} alt="check" />{" "}
            <p>Product discovery and building what matters</p>
          </li>
          <li>
            <img src={listImage} alt="check" />{" "}
            <p>Measuring to ensure updates are a success</p>
          </li>
          <li>
            <img src={listImage} alt="check" /> <p>And much more!</p>
          </li>
        </ul>
        <span>Email Address</span>
        <input
          type="text"
          placeholder="email@company.com"
          onChange={handleOnChange}
          value={email}
        />
        <button onClick={handleOnClick}>Subscribe to monthly newsletter</button>
      </div>
      <div id="fm-image-container">
        <div id="fm-image"></div>
      </div>
    </div>
  );
};

export default Home;
