export default function alert(state = {message:''}, action) {
    switch (action.type) {
      case 'ERROR':
        return {
            message:action.message
        };
      default:
        return state
    }
  }