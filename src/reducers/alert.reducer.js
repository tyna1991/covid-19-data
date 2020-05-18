export default function alert(state = {}, action) {
    switch (action.type) {
      case 'ERROR':
        return {
            message:action.message
        };
      default:
        return state
    }
  }