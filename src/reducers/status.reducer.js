const initialState={
    loading:false,
    status:[],
    name:'',
    slug:'',
    period:{
      name:'',
      dateFrom:''
    }
}


export default function getStatus(state = initialState, action) {
    switch (action.type) {
    case 'STATUS_BY_COUNTRY_REQUEST':
        return {
            ...state,
            name:action.countryName,
            slug:action.countryNameSlug,
            loading:true,
        };
      case 'STATUS_BY_COUNTRY_SUCCESS':
        return {
            ...state,
            loading:false,
            status:action.response.data
        };
        case 'STATUS_BY_COUNTRY_ERROR':
        return {
            ...state,
            loading:false,
        };
        case 'STATUS_BY_COUNTRY_FROM_TO_REQUEST':
        return {
            ...state,
            name:action.countryName,
            slug:action.countryNameSlug,
            loading:true,
        };
      case 'STATUS_BY_COUNTRY_FROM_TO_SUCCESS':
        return {
            ...state,
            loading:false,
            status:action.response.data
        };
        case 'STATUS_BY_COUNTRY_FROM_TO_ERROR':
          return {
              ...state,
              loading:false,
          };
        case 'SET_PERIOD':
          return {
              ...state,
              period:action.period
          };
        case 'RESET_STATUS':
          return {
            ...initialState,
            period:state.period
          }
      default:
        return state
    }
  }