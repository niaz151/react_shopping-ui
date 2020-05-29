var intial_state = [];

export default (state = intial_state, action) => {

  var new_state = [...state];

  switch(action.type){
    case 'INITIALIZE_DATA':
      new_state = action.payload;
      console.log(action.payload);
      return new_state;

    case 'FILTER_SHIRTS':
      new_state = [];
      var products = action.payload;
      break;

    case 'FILTER_PANTS':
      new_state = [];
      break;  

    case 'FILTER_PRICE_DESCENDING':
      break;

    case 'FILTER_PRICE_ASCENDING':
    break;

    default:
      return state;
  }
}