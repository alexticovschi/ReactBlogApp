import axios from 'axios';

export const FETCH_POSTS = 'fetch_posts';

const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=jdffghv76dsw345bg7';


// Make an axios request and assign it to the variable request
//   ...then assign the request to the payload property of the action that is returned
// Because the request is being assigned to the payload property, the
// ...redux promise middleware will automatically resolve the request whenever is sees
// ...the action come across. By the time the action arrives at the reducer, the payload
// ...property will contain the response object from axios containing an array of posts
export function fetchPosts() {
  const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);

  return {
    type: FETCH_POSTS,
    payload: request
  };
}