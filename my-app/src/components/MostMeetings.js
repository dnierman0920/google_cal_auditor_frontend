import { useEffect, useState } from 'react'
import { getMostMeetings } from '../api/calendar_metrics'


const MostMeetings = () => {

    // *******************      HOOKS        ******************* \\

    // ##################   MOST MEETINGS   ################## \\
    // month with most meetings
    const [mostMeetingMonth, setmostMeetingMonth] = useState(null)
    // year most meeting
    const [mostMeetingYear, setmostMeetingYear] = useState(null)
    // most meeting month meeting count
    const [mostMeetingCount, setmostMeetingCount] = useState(null)

    // ##################  LEAST MEETINGS   ################## \\

    // month with least meetings
    const [leastMeetingMonth, setleastMeetingMonth] = useState(null)
    // year least meeting
    const [leastMeetingYear, setleastMeetingYear] = useState(null)
    // least meeting month meeting count
    const [leastMeetingCount, setleastMeetingCount] = useState(null)

    // *******************   AXIOS/API CALL PROMISE CHAIN   ******************* \\
    useEffect(()=> {
        // use the axios call to pull total time spent in meetings
        getMostMeetings()
        .then((res)=> {
            console.log("RESPONSE: ", res.data['total_meeting_duration'])
            setmostMeetingMonth(res.data['most_and_least_meetings_per_month']["most_meetings_month"]["month"])
            setmostMeetingYear(res.data['most_and_least_meetings_per_month']["most_meetings_month"]["year"])
            setmostMeetingCount(res.data['most_and_least_meetings_per_month']["most_meetings_month"]["count"])
            setleastMeetingMonth(res.data['most_and_least_meetings_per_month']["least_meetings_month"]["month"])
            setleastMeetingYear(res.data['most_and_least_meetings_per_month']["least_meetings_month"]["year"])
            setleastMeetingCount(res.data['most_and_least_meetings_per_month']["least_meetings_month"]["count"])
        })

        .catch((error) => {
            console.log("ERROR: ", error)
        })
    },[])

    // *******************   LOADING RETURN   ******************* \\
    // while waiting for axios call to return show a loading sign instead
    if (!mostMeetingMonth) {
        return(
            <>
            <h2>Month with the most meetings</h2>
                <h4>loading...</h4>
            <br></br>
            <h2>Month with the least meetings</h2>
                <h4>loading...</h4>
            </>
        )

    }

    // *******************   SUCCESSFUL RETURN   ******************* \\
    return(
        <>
        <h2>Month with the most meetings</h2>
            <h4>The {mostMeetingMonth}th month of {mostMeetingYear} had {mostMeetingCount} meetings</h4>
        <br></br>
        <h2>Month with the least meetings</h2>
            <h4>The {leastMeetingMonth}th month of {leastMeetingYear} had {leastMeetingCount} meetings</h4>    
        </>
    )  
}

export default MostMeetings