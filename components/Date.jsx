import { parseISO, format } from 'date-fns';

const Date = ({ dateString, dateFormat = "MMM ''yy" }) => {
  const date = parseISO(dateString);
  return <time dateTime={date}>{format(date, dateFormat)}</time>;
};

export default Date;
