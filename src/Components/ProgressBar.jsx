import { useEffect, useState } from "react";
import { MAX, MIN } from "../Utils/constants";
const ProgressBar = ({ value = 0, onComplete = () => {} }) => {
  const [percent, setPercent] = useState(value);
  useEffect(() => {
    setPercent(() => Math.min(MAX, Math.max(MIN, value)));
    if (value >= MAX) {
      onComplete();
    }
  });
  return (
    <div className="progress">
      <span style={{ color: percent > 49 ? "white" : "" }}>
        {percent.toFixed()}%
      </span>
      <div
        style={{ transform: `translateX(${percent - 100}%)` }}
        role="progressbar"
        aria-valuemin={MIN}
        aria-valuemax={MAX}
        aria-valuenow={percent.toFixed()}
      />
    </div>
  );
};

export default ProgressBar;
