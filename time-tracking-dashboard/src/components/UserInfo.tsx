import clsx from "clsx";
import { UserImg } from ".";

type UserInfoProps = {
  setPeriod: React.Dispatch<React.SetStateAction<string>>;
  period: string;
};

const UserInfo = ({ setPeriod, period }: UserInfoProps) => {
  const periodOptions = ["daily", "weekly", "monthly"];

  const handlePeriodChange = (selectedPeriod: string) => {
    setPeriod(selectedPeriod);
  };
  return (
    <div className="user--card ">
      <div className="user--info space">
        <img
          src={UserImg}
          alt="Profile picture of user"
          width={78}
          height={78}
        />
        <section>
          <p>Report for</p>
          <h1>Jeremy Robson</h1>
        </section>
      </div>
      <div className="user--time space">
        {periodOptions.map((option) => (
          <button
            key={option}
            type="button"
            onClick={() => handlePeriodChange(option)}
            className={clsx(period === option ? "active" : "")}
          >
            {option[0].toUpperCase() + option.slice(1)}
          </button>
        ))}
      </div>
    </div>
  );
};

export default UserInfo;
