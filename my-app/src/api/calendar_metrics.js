import apiUrl from '../apiConfig'
import axios from 'axios'

export  const getTimeInMeetings= () => {
	return axios({
		method: 'GET',
		url: apiUrl + '/time-in-meetings/'
	})
}

export default getTimeInMeetings
