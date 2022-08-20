import './App.css';
import MeetingTotalTime from './components/MeetingTotalTime';
import MostCommonAttendees from './components/MostCommonAttendees';
import MostMeetings from './components/MostMeetings';

const App = () => {
  return (
    <>
      <h1>Calendar Auditor Metrics</h1>
      <MeetingTotalTime/>
      <MostCommonAttendees/>
      <MostMeetings/>
    </>
  )
}

export default App;
