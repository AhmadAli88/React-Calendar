import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // Default styling

const Basic = () => {
  const [date, setDate] = useState(new Date());

  return (
    <div>
      <h1>React Calendar Example</h1>
      <Calendar onChange={setDate} value={date} />
      <p>
        Selected Date: <b>{date.toDateString()}</b>
      </p>
    </div>
  );
};

export default Basic;
