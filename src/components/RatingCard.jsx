/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState } from "react";
import starImage from "../assets/images/icon-star.svg";

const RatingCard = ({ setShowResult, selectedNum, setSelectedNum }) => {
  const [ratings, setRatings] = useState([1, 2, 3, 4, 5]);
  //console.log(selectedNum);
  //console.log(setShowResult)

  return (
    <div className="rating-card">
      <div className="icon-div">
        <img src={starImage} alt="" className="star-image" />
      </div>
      <h2>How did we do?</h2>
      <p className="description">
        Please let us know how we did with your support request.All feedback is
        appreciated to help us improve our offering!
      </p>
      <div className="rating-btn-div">
        {ratings.map((rating, index) => {
          return (
            <button
              onClick={() =>
                rating === selectedNum
                  ? setSelectedNum(null)
                  : setSelectedNum(rating)
              }
              className={`rating-btn ${selectedNum === rating ? "active" : ""}`}
              key={index}
            >
              {rating}
            </button>
          );
        })}
      </div>
      <button
        onClick={() => {
          if (selectedNum !== null) {
            setShowResult(true);
          }
        }}
        className="rating-submit-btn"
      >
        Submit
      </button>
    </div>
  );
};

export default RatingCard;
