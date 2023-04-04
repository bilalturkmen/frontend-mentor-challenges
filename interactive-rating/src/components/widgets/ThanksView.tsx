import { thanksImg } from "../";

interface ThanksViewProps {
  selectedUsersRating: string;
  rateAgain: () => void;
}

const ThanksView = ({ selectedUsersRating, rateAgain }: ThanksViewProps) => {
  return (
    <div className="panel thanks">
      <img src={thanksImg} alt="" width={162} height={108} />

      <p className="selected">
        You selected <span>{selectedUsersRating}</span> out of 5
      </p>

      <h2>Thank you!</h2>

      <p>
        We appreciate you taking the time to give a rating. If you ever need
        more support, don’t hesitate to get in touch!
      </p>

      <button type="submit" className="panel__btn" onClick={rateAgain}>
        Rate Again
      </button>
    </div>
  );
};

export default ThanksView;
