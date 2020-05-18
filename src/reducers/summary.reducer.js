const initialState={
    loading:false,
    global:{},
    countries:[]
}


export default function getSummary(state = initialState, action) {
    switch (action.type) {
    case 'SUMMARY_REQUEST':
        return {
            loading:true,
        };
      case 'SUMMARY_SUCCESS':
        return {
            loading:false,
            global:action.data.Global,
            countries:action.data.Countries
        };
      default:
        return state
    }
  }