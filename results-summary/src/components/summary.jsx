// Hooks
import React, { useState } from "react";
// Libraries
import { useReward } from "react-rewards";

function getSuccessMessage() {
  const messages = [
    "Congrats!",
    "Great job!",
    "Don’t ya feel great?!",
    "Up, up, and up!",
    "Um... okay",
    "Did you though?",
    "You're trying your best...",
    "Forget about it!",
  ];
  return messages[Math.floor(Math.random() * messages.length)];
}

function Summary({ data }) {
  const [items] = useState(data);
  const [message, setMessage] = useState("Summary");
  const [disabled, setDisabled] = useState(false);

  const { reward: confettiReward } = useReward("rewardId", "emoji", {
    emoji: ["⚡️", "💥", "✨", "💫", "🌸", "🌟", "🌂"],
    elementSize: 15,
    elementCount: 60,
  });

  const handleCompleted = () => {
    setDisabled(true);
    confettiReward();
    setMessage(getSuccessMessage());

    setTimeout(() => {
      setMessage("Summary");
      setDisabled(false);
    }, 2000);
  };

  return (
    <div className="card__summary">
      <h2> {message} </h2>

      <div className="summary--items">
        {items.map((item, index) => (
          <div
            key={index}
            className="item--row fading--left"
            style={{ backgroundColor: `hsl(${item.color}, 0.09)` }}
          >
            <div className="item--category">
              <img src={item.icon} alt="" aria-hidden={true} />
              <span style={{ color: `hsl(${item.color})` }}>
                {item.category}
              </span>
            </div>
            <div className="item--score">
              <span>{item.score}</span> / 100
            </div>
          </div>
        ))}

        <button
          type="button"
          onClick={handleCompleted}
          aria-label="Continue"
          disabled={disabled}
        >
          Continue
        </button>
      </div>
      <span id="rewardBtn" />
    </div>
  );
}

export default Summary;
