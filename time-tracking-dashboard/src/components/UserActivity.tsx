import { ActivityCard, data } from ".";

interface Props {
  period: string;
}

const UserActivity = ({ period }: Props) => {
  return (
    <>
      {data.map((activity: any) => (
        <ActivityCard
          key={activity.title}
          title={activity.title}
          timeframes={activity.timeframes}
          color={activity.color}
          icon={activity.icon}
          period={period}
          periodtime={
            period === "weekly"
              ? "Last Week"
              : period === "monthly"
              ? "Last Month"
              : "Yesterday"
          }
        />
      ))}
    </>
  );
};

export default UserActivity;
