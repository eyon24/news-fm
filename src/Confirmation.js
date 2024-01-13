import iconSuccess from "./images/icon-success.svg";

const Confirmation = ({ email, toggleClick }) => {
  return (
    <div id="success-container">
      <div id="success-icon">
        <img src={iconSuccess} alt="iconSuccess" />
      </div>
      <h1>Thanks for Subscribing!</h1>
      <p>
        A confirmation email has been sent to <p id="pmail">{email}</p>. Please
        open it and click the button inside to confirm your subscription.
      </p>
      <button id="dismiss-btn" onClick={toggleClick}>
        Dismiss Message
      </button>
    </div>
  );
};

export default Confirmation;
