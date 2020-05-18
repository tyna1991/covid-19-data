import axios from 'axios'

export const countryService = {
    countriesService,
};

//get all countries
function countriesService() {
    return axios.get('https://api.covid19api.com/countries')
}