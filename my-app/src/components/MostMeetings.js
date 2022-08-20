import { useEffect, useState } from 'react'
import getTimeInMeetings from '../api/calendar_metrics'


const MostMeetings = () => {

    // *******************   HOOKS   ******************* \\
    // create a hook for days
    const [days, setdays] = useState(null)
    // create a hook for hours
    const [hours, sethours] = useState(null)
    // create a hook for minutes
    const [minutes, setminutes] = useState(null)

    // *******************   AXIOS/API CALL PROMISE CHAIN   ******************* \\
    useEffect(()=> {
        // use the axios call to pull total time spent in meetings
        getTimeInMeetings()
        .then((res)=> {
            console.log("RESPONSE: ", res.data['total_meeting_duration'])
            setdays(res.data['total_meeting_duration'].days)
            sethours(res.data['total_meeting_duration'].hours)
            setminutes(res.data['total_meeting_duration'].minutes)
        })

        .catch((error) => {
            console.log("ERROR: ", error)
        })
    },[])

    // *******************   LOADING RETURN   ******************* \\
    // while waiting for axios call to return show a loading sign instead
    if (!days || !hours || !minutes) {
        return(
            <>
            <h2>Total Time in Meetings Over Last 3 Months</h2>
            <ul>
                <li>days: loading...</li>
                <li>hours: loading...</li>
                <li>minutes: loading...</li>
            </ul>
        </>
        )

    }

    // *******************   SUCCESSFUL RETURN   ******************* \\
    return(
        <>
            <h2>Total Time in Meetings Over Last 3 Months</h2>
            <ul>
                <li>days: {days}</li>
                <li>hours: {hours}</li>
                <li>minutes: {minutes}</li>
            </ul>
        </>
    )  
}

export default MostMeetings