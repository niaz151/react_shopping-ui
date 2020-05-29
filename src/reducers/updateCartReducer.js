var initial_state = {
  'num_items':0,
  'items':[]
};

export default (state = initial_state, action) => {
  
  var new_state = state;

  switch(action.type){

    case 'ADD_TO_CART':
      new_state.num_items = new_state.num_items += 1;
      new_state.items.push(action.payload)
      return new_state;

    case 'REMOVE_FROM_CART':
      return new_state;

    case 'UPDATE_QUANTITY':
      return new_state;

    default:
      return initial_state;

  }

}