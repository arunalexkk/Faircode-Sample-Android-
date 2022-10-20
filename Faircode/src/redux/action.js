import axios from "axios";
export const GET_LIST = 'GET_LIST';
export const SEARCH_ITEM = 'SEARCH_ITEM';
const API_URL = 'https://jsonplaceholder.typicode.com/posts';
const BASE_URL = API_URL;

export const getList = () => {
    try {
      return async dispatch => {
        const res = await axios.get(`${BASE_URL}`);
        if (res.data) {
          dispatch({
            type: GET_LIST,
            payload: res.data,
          });
          console.log(res.data);

        } else {
          console.log('Unable to fetch');
        }
      };
    } catch (error) {

        }
  };

  export const searchlist= search => dispatch => {
    dispatch({
      type: SEARCH_ITEM,
      payload: search,
    });
  };