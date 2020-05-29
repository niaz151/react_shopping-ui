var intial_state = [];

export default (state = intial_state, action) => {

  var new_state = [...state];

  switch(action.type){
    case 'UPDATE_DATA':
      new_state = action.payload;
      return new_state;

    default:
      return state;
  }
}