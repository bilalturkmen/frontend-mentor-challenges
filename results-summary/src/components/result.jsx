// Hooks
import { useState } from "react";
// Libraries
import CountUp from "react-countup";
import JSConfetti from "js-confetti";

const jsConfetti = new JSConfetti();

function Result({ averageScore }) {
  const [counting, setCounting] = useState(false);

  return (
    <div className="card__result">
      <h2>Your Result</h2>
      <div className="result--score">
        <p>
          <CountUp
            end={averageScore.toFixed(0)}
            duration={1.5}
            onEnd={() => {
              setCounting(true);

              jsConfetti.addConfetti({
                emojis: ["⚡️", "💥", "✨", "💫", "🌸", "🌟", "🌂"],
                emojiSize: 15,
                confettiNumber: 200,
              });
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
      <p>
        You scored higher than 65% of the people who have taken these tests.
      </p>
    </div>
  );
}

export default Result;
