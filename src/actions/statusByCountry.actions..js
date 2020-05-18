import {statusService} from './../services/status.service'
import {alertActions} from './alert.actions'

export const statusByCountry={
    //By Country All Status
    byCountryAllStatus, 
    byCountryAllStatusFromTo,
}
function byCountryAllStatus(countryName) {
    return dispatch => {
        dispatch(request());
        statusService.byCountryAllStatus(countryName)
            .then(
                data => {dispatch(success(data));
                },
                error => {
                    dispatch(alertActions.error(error.toString()));
                }
            );
    };
    function request() { return { type: 'STATUS_BY_COUNTRY_REQUEST'} }
    function success(data) { return { type: 'STATUS_BY_COUNTRY_SUCCESS', data } }
}
function byCountryAllStatusFromTo(countryName, from,to) {
    return dispatch => {
        dispatch(request());
        statusService.byCountryAllStatusFromTo(countryName, from,to)
            .then(
                data => {dispatch(success(data));
                },
                error => {
                    dispatch(alertActions.error(error.toString()));
                }
            );
    };
    function request() { return { type: 'STATUS_BY_COUNTRY_FROM_TO_REQUEST'} }
    function success(data) { return { type: 'STATUS_BY_COUNTRY_FROM_TO_SUCCESS', data } }
}