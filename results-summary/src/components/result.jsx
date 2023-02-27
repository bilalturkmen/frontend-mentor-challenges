// Hooks
import { useState } from "react";
// Libraries
import CountUp from "react-countup";
import { useReward } from "react-rewards";

function Result({ averageScore }) {
  const [counting, setCounting] = useState(false);
  const { reward: confettiReward } = useReward("rewardId", "emoji", {
    emoji: ["⚡️", "💥", "✨", "💫", "🌸", "🌟", "🌂"],
    elementSize: 15,
    elementCount: 60,
    lifetime: 100,
  });

  return (
    <div className="card__result">
      <h2>Your Result</h2>
      <div className="result--score">
        <p>
          <CountUp
            end={averageScore.toFixed(0)}
            duration={1}
            onEnd={() => {
              setCounting(true);
              confettiReward();
            }}
          />
        </p>
        <span> of 100</span>
      </div>
      <div className="result--calc">
        {!counting ? (
          <div className="calculating">calculating...</div>
        ) : (
          <div className="greeting"> Great</div>
        )}
      </div>
      <span id="rewardId" />
      <p className="result--text">
        You scored higher than 65% of the people who have taken these tests.
      </p>
    </div>
  );
}

export default Result;
