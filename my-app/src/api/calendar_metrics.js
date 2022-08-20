import apiUrl from '../apiConfig'
import axios from 'axios'

export const getTimeInMeetings= () => {
	return axios({
		method: 'GET',
		url: apiUrl + '/time-in-meetings/'
	})
}

// export default getTimeInMeetings

export const getMostMeetings= () => {
	return axios({
		method: 'GET',
		url: apiUrl + '/time-in-meetings/'
	})
}

// export default getMostMeetings

export const getMostCommonAttendees= () => {
	return axios({
		method: 'GET',
		url: apiUrl + '/most-common-attendees/'
	})
}

// export default getMostCommonAttendees getMostMeetings
