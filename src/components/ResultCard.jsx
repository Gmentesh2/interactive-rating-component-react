/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import img from "../assets/images/illustration-thank-you.svg";
const ResultCard = ({ selectedNum, setShowResult }) => {
  return (
    <div className="result-card">
      <img src={img} alt="" />
      <p className="selected-rating">You selected {selectedNum} out of 5</p>
      <h2 className="thank-you">Thank you!</h2>
      <p className="result-text">
        We appreciate you taking time to give a rating.If you ever need more
        support, don't hesitate to get in touch!
      </p>
      <button className="back-btn" onClick={() => setShowResult(false)}>
        Back to ratings
      </button>
    </div>
  );
};

export default ResultCard;
