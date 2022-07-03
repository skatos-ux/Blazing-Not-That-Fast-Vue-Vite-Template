import type { AxiosInstance } from 'axios'
import axios from 'axios'

interface routesInterface {
	GET_TIMESLOTS: (trackingNumber: string) => string
}

interface axiosObjectInterface {
	instance: AxiosInstance
	routes: routesInterface
}

function createInstance(baseURL: string) {
	return axios.create({
		baseURL,
		headers: {
			'Content-Type': 'application/json',
			'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI0MzM0MWRtIn0.U3V-_BO4tQPM31K6uiO9w5uQ_sPZmGIseyt7QhGR1W4',
		},
	})
}

const axiosRoutes: routesInterface = {
	GET_TIMESLOTS: (trackingNumber: string) => {
		if (import.meta.env.DEV) {
			return `${import.meta.env.VITE_DEV_ENDPOINT_GET_TIMESLOTS}/${trackingNumber}`
		}
		return `${import.meta.env.VITE_PROD_ENDPOINT_GET_TIMESLOTS}/${trackingNumber}`
	},
}

const axiosObject: axiosObjectInterface = {
	instance: createInstance(''),
	routes: axiosRoutes,
}

if (import.meta.env.DEV) {
	axiosObject.instance = createInstance(import.meta.env.VITE_DEV_API_URL)
}
else {
	axiosObject.instance = createInstance(import.meta.env.VITE_TEST_API_URL)
}

export const { instance, routes } = axiosObject
