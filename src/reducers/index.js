import alert from './alert.reducer';
import getCountries from './countries.reducer';
import getStatus from './status.reducer';
import getSummary from './summary.reducer';

import { combineReducers } from 'redux'
export default combineReducers({
    alert,
    getCountries,
    getStatus,
    getSummary,
  })