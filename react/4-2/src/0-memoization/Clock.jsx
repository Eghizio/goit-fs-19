import { useEffect, useState } from "react";

const pad = (num) => num.toString().padStart(2, "0");

export const Clock = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setDate(new Date());
    }, 200);

    return () => clearInterval(interval);
  }, []);

  const hours = pad(date.getHours());
  const minutes = pad(date.getMinutes());
  const miliseconds = pad(date.getMilliseconds());

  return (
    <div>
      {hours}:{minutes}:{miliseconds}
    </div>
  );
};
