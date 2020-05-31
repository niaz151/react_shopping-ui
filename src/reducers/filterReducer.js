var intial_state = [];

export default (state = intial_state, action) => {

  switch(action.type){
    case 'UPDATE_DATA':
      return action.payload;

    default:
      return state;
  }
}