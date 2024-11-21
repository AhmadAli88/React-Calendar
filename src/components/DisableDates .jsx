import Calendar from 'react-calendar';

const isDisabled = (date) => {
  // Disable weekends
  const day = date.getDay();
  return day === 0 || day === 6;
};

const DisableDates = () => (
  <Calendar tileDisabled={({ date }) => isDisabled(date)} />
);

export default DisableDates;
