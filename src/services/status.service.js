import axios from 'axios'

export const statusService = {
    byCountryAllStatus, 
    byCountryAndStatusAfterDate,
    summary

};

function byCountryAllStatus(countryName) {
    return axios.get(`https://api.covid19api.com/country/${countryName}`)
}
function byCountryAndStatusAfterDate(countryName, from) {
    return axios.get(`https://api.covid19api.com/live/country/${countryName}/status/confirmed/date/${from}`)
}
function summary() {
    return axios.get('https://api.covid19api.com/summary')
}