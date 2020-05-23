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
    const to = new Date().toISOString().split('T')[0] + 'T00:00:00Z'
    return axios.get(`https://api.covid19api.com/country/${countryName}?from=${from}&to=${to}`)
}
function summary() {
    return axios.get('https://api.covid19api.com/summary')
}