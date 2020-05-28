var initial_state = {
  'num_items':0,
  'items':[]
};

export default (state = initial_state, action) => {
  
  var new_state = state;

  switch(action.type){

    case 'ADD_TO_CART':
      break;

    case 'REMOVE_FROM_CART':
      break;

    case 'UPDATE_QUANTITY':
      break;

    default:
      return state;

  }

}