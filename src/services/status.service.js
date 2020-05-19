import axios from 'axios'

export const statusService = {
    byCountryAllStatus, 
    byCountryAndStatusAfterDate,
    summary

};

function byCountryAllStatus(countryName) {
    return axios.get(`https://api.covid19api.com/country/${countryName}`)
}
function byCountryAndStatusAfterDate(countryName, from, to) {
    return axios.get(`https://api.covid19api.com/country/${countryName}?from=${from}&to=${to}`)
}
function summary() {
    return axios.get('https://api.covid19api.com/summary')
}