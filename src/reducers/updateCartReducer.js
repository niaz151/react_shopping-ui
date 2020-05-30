var initial_state = {
  'num_items':0,
  'items':[]
};

export default (state = initial_state, action) => {
  
  var new_state
 
  switch(action.type){

    case 'ADD_TO_CART':
      new_state = state;
      new_state.num_items = new_state.num_items += 1;
      new_state.items.push(action.payload);
      return new_state;

    case 'REMOVE_FROM_CART':
      
      new_state = state;
      new_state.num_items = new_state.num_items -= 1;
      for(var i = 0; i < new_state.items.length; i++){
        if(new_state.items[i].title === action.payload){
          new_state.items.splice(i,1);
        }
      }
      console.log(new_state)
      return new_state

    case 'UPDATE_QUANTITY':
      return new_state;

    default:
      return initial_state;

  }

}