import  { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // Default styles (optional)
import './CustomCalendar.css'; // Import custom styles

const CustomStyledCalendar = () => {
  const [date, setDate] = useState(new Date());

  return (
    <div className="custom-calendar-container">
      <h1>Custom Styled Calendar</h1>
      <Calendar 
        onChange={setDate} 
        value={date} 
        className="custom-calendar" // Apply custom class to the calendar
      />
      <p>
        Selected Date: <b>{date.toDateString()}</b>
      </p>
    </div>
  );
};

export default CustomStyledCalendar;
