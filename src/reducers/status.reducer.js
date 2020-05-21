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
        case 'SET_PERIOD':
          return {
              ...state,
              period:action.period
          };
      default:
        return state
    }
  }