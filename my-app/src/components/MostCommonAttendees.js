import { useEffect, useState } from 'react'
import { getMostCommonAttendees } from '../api/calendar_metrics'


const MostCommonAttendees = () => {

    // *******************   HOOKS   ******************* \\
    // create a hook for days
    const [topAttendees, settopAttendees] = useState(null)

    // *******************   AXIOS/API CALL PROMISE CHAIN   ******************* \\
    useEffect(()=> {
        // use the axios call to pull total time spent in meetings
        getMostCommonAttendees()
        .then((res)=> {
            console.log("RESPONSE!: ", res.data['total_meeting_duration'])
            settopAttendees(res.data['most_common_attendees'])
        })

        .catch((error) => {
            console.log("ERROR: ", error)
        })
    },[])

    // *******************   LOADING RETURN   ******************* \\
    // while waiting for axios call to return show a loading sign instead
    if (!topAttendees) {
        return(
            <>
                <h2>Top three most common attendees</h2>
                <ol>
                    <li>Loading...</li>
                    <li>Loading...</li>
                    <li>Loading...</li>
                </ol>
            </>
        )

    }

    // *******************   SUCCESSFUL RETURN   ******************* \\
    return(
        <>
        <h2>Top three most common attendees</h2>
        <ol>
            <li>{Object.keys(topAttendees)[0]} with {Object.values(topAttendees)[0]} meetings</li>
            <li>{Object.keys(topAttendees)[1]} with {Object.values(topAttendees)[1]} meetings</li>
            <li>{Object.keys(topAttendees)[2]} with {Object.values(topAttendees)[2]} meetings</li>
        </ol>
    </>
    )  
}

export default MostCommonAttendees