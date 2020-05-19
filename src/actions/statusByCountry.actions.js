import {statusService} from './../services/status.service'
import {alertActions} from './alert.actions'

export const statusByCountry={
    //By Country All Status
    byCountryAllStatus, 
    byCountryAndStatusAfterDate,
    setPeriod
}
function byCountryAllStatus(countryNameSlug, countryName) {
    return dispatch => {
        dispatch(request(countryName, countryNameSlug));
        statusService.byCountryAllStatus(countryNameSlug)
            .then(
                data => {dispatch(success(data));
                },
                error => {
                    dispatch(alertActions.error(error.toString()));
                }
            );
    };
    function request(countryName, countryNameSlug) { return { type: 'STATUS_BY_COUNTRY_REQUEST', countryName, countryNameSlug} }
    function success(response) { return { type: 'STATUS_BY_COUNTRY_SUCCESS', response } }
}
function byCountryAndStatusAfterDate(countryNameSlug, from, countryName) {
    return dispatch => {
        dispatch(request(countryName, countryNameSlug));
        statusService.byCountryAndStatusAfterDate(countryNameSlug, from, countryName)
            .then(
                data => {dispatch(success(data));
                },
                error => {
                    dispatch(alertActions.error(error.toString()));
                }
            );
    };
    function request(countryName, countryNameSlug) { return { type: 'STATUS_BY_COUNTRY_FROM_TO_REQUEST', countryName, countryNameSlug} }
    function success(response) { return { type: 'STATUS_BY_COUNTRY_FROM_TO_SUCCESS', response } }
}
function setPeriod(period) {
    return dispatch => dispatch({ type: 'SET_PERIOD', period} );
}