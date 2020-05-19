import axios from 'axios'

export const countriesService = {
    allCountries,
};

//get all countries
function allCountries() {
    return axios.get('https://api.covid19api.com/countries')
}