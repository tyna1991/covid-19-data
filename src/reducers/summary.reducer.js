const initialState={
    loading:false,
    global:{},
    countries:[]
}


export default function getSummary(state = initialState, action) {
    switch (action.type) {
    case 'SUMMARY_REQUEST':
        return {
            ...state,
            loading:true,
        };
      case 'SUMMARY_SUCCESS':
        return {
            loading:false,
            global:action.response.data.Global,
            countries:action.response.data.Countries
        };
        case 'SUMMARY_ERROR':
          return {
            ...state,
            loading:false,
          };
      default:
        return state
    }
  }