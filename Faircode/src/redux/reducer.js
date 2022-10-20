import {GET_LIST,SEARCH_ITEM} from './action';
const initialState = {
    lists: []
};
function listReducer(state = initialState, action) {
  switch (action.type) {
    case GET_LIST:
      return {...state, lists: action.payload};
      case SEARCH_ITEM:
      return {
        ...state,
        lists: state.lists.filter(
          search => String(search.title).includes(action.payload)

        ),
      };
    default:
      return state;
  }
}
export default listReducer;
