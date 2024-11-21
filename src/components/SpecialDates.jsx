import Calendar from 'react-calendar';

const SpecialDates = () => {
  const markDates = [new Date(2024, 10, 25), new Date(2024, 11, 1)]; // Example dates

  return (
    <Calendar
      tileContent={({ date }) =>
        markDates.some((d) => d.toDateString() === date.toDateString()) ? (
          <div style={{ color: 'red', fontWeight: 'bold' }}>●</div>
        ) : null
      }
    />
  );
};

export default SpecialDates;
