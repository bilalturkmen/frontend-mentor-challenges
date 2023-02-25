// Hooks
import { useState } from "react";
// libraries
import JSConfetti from "js-confetti";

const jsConfetti = new JSConfetti();

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
  const [message, setMessage] = useState("Summary");
  const [items] = useState(data);

  const handleCompleted = async (e) => {
    setMessage(getSuccessMessage());
    await jsConfetti.addConfetti({
      emojis: ["⚡️", "💥", "✨", "💫", "🌸", "🌟", "🌂"],
      emojiSize: 15,
      confettiNumber: 200,
    });
    setMessage("Summary");
  };

  return (
    <div className="card__summary">
      <h2> {message} </h2>
      <div className="summary--items ">
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
        <button type="button" aria-label="Continue" onClick={handleCompleted}>
          Continue
        </button>
      </div>
    </div>
  );
}

export default Summary;
