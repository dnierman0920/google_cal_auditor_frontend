import { useEffect, useState } from 'react'
import getTimeInMeetings from '../api/calendar_metrics'


const MeetingTotalTime = () => {
    let timeInMeetingsJSON = getTimeInMeetings()
    console.log("timeInMeetings: ", timeInMeetingsJSON)

    // create a hook for days
    const [days, setdays] = useState(null)
    // create a hook for hours
    const [hours, sethours] = useState(null)
    // create a hook for minutes
    const [minutes, setminutes] = useState(null)

    useEffect(()=> {
        // use the axios call to pull total time spent in meetings
        getTimeInMeetings()
        .then((res)=> {
            console.log("RESPONSE: ", res.data['Total Meeting Duration'])
            setdays(res.data['Total_Meeting_Duration'].days)
            sethours(res.data['Total_Meeting_Duration'].hours)
            setminutes(res.data['Total_Meeting_Duration'].minutes)
        })

        .catch((error) => {
            console.log("ERROR: ", error)
        })
    },[])

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

export default MeetingTotalTime