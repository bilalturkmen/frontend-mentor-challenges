import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { RatingView } from "./";
import { ThanksView } from "./";

const RatingCard = () => {
  const [rating, setRating] = useState<string>("0");
  const [submitRating, setSubmitRating] = useState<boolean>(false);

  // Set Alert Message
  const notify = () => {
    toast("😏 Oops! You did not select a vote", {
      position: "top-center",
      autoClose: 2000,
      theme: "dark",
    });
  };

  // Set Selected Rating
  const handleChangeRating = (selectedRating: string) => {
    setRating(selectedRating);
  };

  // Submit Button Handle
  const handleSubmitRating = (e: React.FormEvent) => {
    e.preventDefault();
    if (rating === "0") {
      notify();
    } else {
      setSubmitRating(!submitRating);
    }
  };

  //Rate Again Button Handle
  const handleRateAgain = () => {
    setSubmitRating(!submitRating);
    setRating("0");
  };

  return (
    <section>
      {!submitRating ? (
        <RatingView
          rating={rating}
          onChangeRating={handleChangeRating}
          finishRating={handleSubmitRating}
        />
      ) : (
        <ThanksView selectedUsersRating={rating} rateAgain={handleRateAgain} />
      )}
      <ToastContainer />
    </section>
  );
};

export default RatingCard;
