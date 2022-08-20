import './App.css';
import MeetingTotalTime from './components/MeetingTotalTime';
import MostCommonAttendees from './components/MostCommonAttendees';
import MostMeetings from './components/MostCommonAttendees';

const App = () => {
  return (
    <>
      <h1>Calendar Auditor Metrics</h1>
      <MeetingTotalTime/>
      <MostCommonAttendees/>
    </>
  )
}

export default App;
