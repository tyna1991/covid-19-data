const initialState={
    loading:false,
    status:[]
}


export default function getStatus(state = initialState, action) {
    switch (action.type) {
    case 'STATUS_BY_COUNTRY_REQUEST':
        return {
            loading:true,
        };
      case 'STATUS_BY_COUNTRY_SUCCESS':
        return {
            loading:false,
            status:action.data
        };
      default:
        return state
    }
  }