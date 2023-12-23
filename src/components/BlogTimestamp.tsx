import moment from "moment";

interface BlogTimestampProps {
  timestamp: number;
}
export default function BlogTimestamp({ timestamp }: BlogTimestampProps) {
  const renderDate = (timestamp: number) => {
    const momentTimestamp = moment(timestamp);
    const now = moment();
    const diff = now.diff(momentTimestamp);
    return moment.duration(diff).humanize() + " ago";
  };

  return <div className="text-xs mb-2">{renderDate(timestamp)}</div>;
}
