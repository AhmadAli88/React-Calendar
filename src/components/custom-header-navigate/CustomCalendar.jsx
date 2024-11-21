/* eslint-disable no-unused-vars */
import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // Default styles
import './CustomCalendar.css'; // Custom styles

const CustomCalendar = () => {
  const [date, setDate] = useState(new Date());

  // Custom navigation label
  const customNavigationLabel = ({ date, label }) => {
    return (
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <button
          style={{
            background: 'none',
            border: 'none',
            fontSize: '16px',
            color: '#007bff',
            cursor: 'pointer',
          }}
          onClick={() => alert('Navigate to previous year')}
        >
          «
        </button>
        <h3 style={{ margin: '0 10px', color: '#007bff' }}>Year: {date.getFullYear()}</h3>
        <button
          style={{
            background: 'none',
            border: 'none',
            fontSize: '16px',
            color: '#007bff',
            cursor: 'pointer',
          }}
          onClick={() => alert('Navigate to next year')}
        >
          »
        </button>
      </div>
    );
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Custom React Calendar</h1>
      <Calendar
        onChange={setDate}
        value={date}
        nextLabel="Next →"
        prevLabel="← Previous"
        navigationLabel={customNavigationLabel} // Use custom header
        next2Label={null} // Remove "next decade" button
        prev2Label={null} // Remove "previous decade" button
      />
      <p style={{ marginTop: '20px' }}>
        Selected Date: <b>{date.toDateString()}</b>
      </p>
    </div>
  );
};

export default CustomCalendar;
