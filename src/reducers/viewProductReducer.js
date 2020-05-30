var initial_state = '';

export default (state = initial_state, action) => {
    switch(action.type){

        case 'VIEW_ITEM_DETAILS':
            return action.payload;

        default:
            return state;
    }
}