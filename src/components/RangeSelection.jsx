import{ useState } from 'react';
import Calendar from 'react-calendar';

const RangeSelection = () => {
  const [range, setRange] = useState([new Date(), new Date()]);

  return (
    <div>
      <h2>Select a Date Range</h2>
      <Calendar
        onChange={setRange}
        value={range}
        selectRange={true}
      />
      <p>
        Start: <b>{range[0].toDateString()}</b> | End: <b>{range[1].toDateString()}</b>
      </p>
    </div>
  );
};

export default RangeSelection;
