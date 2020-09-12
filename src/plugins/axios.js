import axios from "axios";
export const HTTP = axios.create({
	baseURL: `https://api.covid19api.com/`,
	timeout: 10000,
});
