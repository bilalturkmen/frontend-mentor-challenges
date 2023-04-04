import { RadioInput } from "../";
import { starIcon } from "../";

interface RatingViewProps {
  rating: string;
  onChangeRating: (selectedRating: string) => void;
  finishRating: (e: React.FormEvent) => void;
}

const RatingView = ({
  rating,
  onChangeRating,
  finishRating,
}: RatingViewProps) => {
  const ratings = ["1", "2", "3", "4", "5"];

  return (
    <div className="panel rating">
      <img src={starIcon} alt="" className="panel--icon" />
      <h2> How did we do?</h2>
      <p>
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
      <form>
        <div className="panel__ratings">
          {ratings.map((number, index) => {
            return (
              <RadioInput
                key={index}
                value={number}
                label={number}
                handleCheckRating={onChangeRating}
              />
            );
          })}
        </div>
        <button type="submit" className="panel__btn" onClick={finishRating}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default RatingView;
