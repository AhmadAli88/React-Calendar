import './App.css';
import Basic from './components/Basic';
import CustomCalendar from './components/custom-header-navigate/CustomCalendar';
import CustomStyledCalendar from './components/custom/CustomStyledCalendar';
import DisableDates from './components/DisableDates ';
import LocalizedCalendar from './components/LocalizedCalendar';
import RangeSelection from './components/RangeSelection';
import SpecialDates from './components/SpecialDates';

function App() {
  return (
    <div>
      <Basic />
      <RangeSelection />
      <DisableDates />
      <SpecialDates />
      <LocalizedCalendar />
      <CustomStyledCalendar />
      <CustomCalendar />
    </div>
  );
}

export default App;
