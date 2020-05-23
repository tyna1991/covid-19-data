import {countriesService} from './../services/countries.service'
import {alertActions} from './alert.actions'

export const countriesAction={
    //Countries
    allCountries,
}
function allCountries() {
    return dispatch => {
        dispatch(request());
        countriesService.allCountries()
            .then(
                data => {dispatch(success(data));
                },
                error => {
                    dispatch(failure(error.toString()));
                    dispatch(alertActions.error(error.toString()));
                }
            );
    };
    function request() { return { type: 'GET_ALL_COUNTRIES_REQUEST'} }
    function success(response) { return { type: 'GET_ALL_COUNTRIES_SUCCESS', response  } }
    function failure(error) { return { type: 'GET_ALL_COUNTRIES_ERROR', error } }
}
