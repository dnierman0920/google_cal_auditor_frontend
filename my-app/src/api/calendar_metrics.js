import apiUrl from '../apiConfig'
import axios from 'axios'

export const getTimeInMeetings= () => {
	return axios({
		method: 'GET',
		url: apiUrl + '/time-in-meetings/'
	})
}


export const getMostMeetings= () => {
	return axios({
		method: 'GET',
		url: apiUrl + '/most-meetings/'
	})
}

export const getMostCommonAttendees= () => {
	return axios({
		method: 'GET',
		url: apiUrl + '/most-common-attendees/'
	})
}


