const initialState={
    loading:false,
    countries:[]
}

export default function getCountries(state = initialState, action) {
    switch (action.type) {
    case 'GET_ALL_COUNTRIES_REQUEST':
        return {
            ...state,
            loading:true,
        };
      case 'GET_ALL_COUNTRIES_SUCCESS':
        return {
            loading:false,
            countries:action.response.data
        };
      case 'GET_ALL_COUNTRIES_ERROR':
        return {
          ...state,
          loading:false,
        };
      default:
        return state
    }
  }