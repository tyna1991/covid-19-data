const initialState={
    loading:false,
    countries:[]
}

export default function getCountries(state = initialState, action) {
    switch (action.type) {
    case 'GET_ALL_COUNTRIES_REQUEST':
        return {
            loading:true,
        };
      case 'GET_ALL_COUNTRIES_SUCCESS':
        return {
            loading:false,
            countries:action.data
        };
      default:
        return state
    }
  }