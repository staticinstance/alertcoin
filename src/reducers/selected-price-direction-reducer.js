export default (state, action) => {
  switch(action.type){
    case "DIRECTION_SELECTED":
      return action.payload;
    case "AUTH_STATE_CHANGE":
      return action.payload ? state : '';
    default:
      return state || ''
  }
}
