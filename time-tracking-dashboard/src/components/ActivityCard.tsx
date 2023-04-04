import clsx from "clsx";

interface Frame {
  [period: string]: {
    current: number;
    previous: number;
  };
}

interface TimeFrame {
  title: string;
  timeframes: Frame;
  color: string;
  icon: string;
  period: string;
  periodtime: string;
}

const ActivityCard = ({
  title,
  timeframes,
  icon,
  color,
  period,
  periodtime,
}: TimeFrame) => {
  const currentTime = timeframes[period].current;
  const previousTime = timeframes[period].previous;

  return (
    <div className={clsx("category--card", color)}>
      <div className="category--img">
        <img src={icon} alt="" />
      </div>
      <div className="category--data space">
        <div className="category--name">
          <h2>{title}</h2>
          <button type="button" title="options" aria-label="options">
            <svg width="21" height="8" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M2.5 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z"
                fill="currentColor"
              ></path>
            </svg>
          </button>
        </div>
        <div className="category--time">
          <h2>{currentTime}hrs</h2>
          <p>
            {periodtime} - {previousTime}hrs
          </p>
        </div>
      </div>
    </div>
  );
};

export default ActivityCard;
