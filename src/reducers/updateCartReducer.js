import { CardActionArea } from "@material-ui/core";

var initial_state = {
  num_items:0,
  items:[]
};

export default (state = initial_state, action) => {

  switch(action.type){
 
    case 'ADD_TO_CART':
      return {
        ...state,
        num_items: state.num_items += 1,
        items:[...state.items,action.payload]
      }

    case 'REMOVE_FROM_CART':
      var index = 0;
      var length = Object.keys(state.items).length
      for(var i = 0; i < length; i ++){
        if(state.items[i].title === action.payload){
          index = i;
        }
      }
     
      var copy = [...state.items]
      copy.splice(index,1)
  
      return {
        ...state,
        num_items: state.num_items -= 1,
        items:copy
      }


    default:
      return initial_state;

  }

} 