import {statusService} from './../services/status.service'
import {alertActions} from './alert.actions'

export const statusCountries={
    //summary
    summary
}
function summary() {
    return dispatch => {
        dispatch(request());
        statusService.summary()
            .then(
                data => {dispatch(success(data));
                },
                error => {
                    dispatch(failure(error.toString()));
                    dispatch(alertActions.error(error.toString()));
                }
            );
    };
    function request() { return { type: 'SUMMARY_REQUEST'} }
    function success(response) { return { type: 'SUMMARY_SUCCESS', response } }
    function failure(error) { return { type: 'SUMMARY_ERROR', error } }
}