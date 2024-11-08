/* eslint-disable no-unused-vars */
import { useState } from "react";
import "./App.css";
import RatingCard from "./components/RatingCard";
import ResultCard from "./components/ResultCard";

const App = () => {
  const [showResult, setShowResult] = useState(false);
  const [selectedNum, setSelectedNum] = useState(null);
  return (
    <>
      {showResult === true ? (
        <ResultCard selectedNum={selectedNum} setShowResult={setShowResult} />
      ) : (
        <RatingCard
          setShowResult={setShowResult}
          selectedNum={selectedNum}
          setSelectedNum={setSelectedNum}
        />
      )}
    </>
  );
};

export default App;
