import {statusService} from './../services/status.service'
import {alertActions} from './alert.actions'

export const statusByCountry={
    //By Country All Status
    byCountryAllStatus, 
    byCountryAndStatusAfterDate,
    setPeriod,
    resetStatus
}
function byCountryAllStatus(countryNameSlug, countryName) {
    return dispatch => {
        dispatch(request(countryName, countryNameSlug));
        statusService.byCountryAllStatus(countryNameSlug)
            .then(
                data => {dispatch(success(data));
                },
                error => {
                    dispatch(failure(error.toString()));
                    dispatch(alertActions.error(error.toString()));
                }
            );
    };
    function request(countryName, countryNameSlug) { return { type: 'STATUS_BY_COUNTRY_REQUEST', countryName, countryNameSlug} }
    function success(response) { return { type: 'STATUS_BY_COUNTRY_SUCCESS', response } }
    function failure(error) { return { type: 'STATUS_BY_COUNTRY_ERROR', error } }
}
function byCountryAndStatusAfterDate(countryNameSlug, from, countryName) {
    return dispatch => {
        dispatch(request(countryName, countryNameSlug));
        statusService.byCountryAndStatusAfterDate(countryNameSlug, from, countryName)
            .then(
                data => {dispatch(success(data));
                },
                error => {
                    dispatch(failure(error.toString()));
                    dispatch(alertActions.error(error.toString()));
                }
            );
    };
    function request(countryName, countryNameSlug) { return { type: 'STATUS_BY_COUNTRY_FROM_TO_REQUEST', countryName, countryNameSlug} }
    function success(response) { return { type: 'STATUS_BY_COUNTRY_FROM_TO_SUCCESS', response } }
    function failure(error) { return { type: 'STATUS_BY_COUNTRY_FROM_TO_ERROR', error } }
}
function setPeriod(period) {
    return dispatch => dispatch({ type: 'SET_PERIOD', period} );
}
function resetStatus() {
    return dispatch => dispatch({ type: 'RESET_STATUS'} );
}