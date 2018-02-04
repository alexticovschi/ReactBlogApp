import axios from 'axios';

export const FETCH_POSTS = 'fetch_posts';
export const FETCH_POST  = 'fetch_post';
export const CREATE_POST = 'create_post';
export const DELETE_POST = 'delete_post';

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

// 1. Make the API request
// 2. After the API request has been successfully completed execute the callback function
//   # the callback function is responsible for executing the following code: 
//     'this.props.history.push('/');' which will send the user to the list of posts
export function createPost(values, callback) {
  // In this get request a URL is provided as the first argument and then the second argument
  //  is the object or the data that we want to send to the remote API
  const request = axios.post(`${ROOT_URL}/posts${API_KEY}`, values)
    .then(() => callback());
  return {
    type: CREATE_POST,
    payload: request
  }
}

// this action creator is going to be called with the ID of the post that we want to fetch
export function fetchPost(id) {
  const request = axios.get(`${ROOT_URL}/posts/${id}${API_KEY}`);

  return {
    type: FETCH_POST,
    payload: request
  }
}


export function deletePost(id, callback) {
  const request = axios.delete(`${ROOT_URL}/posts/${id}${API_KEY}`)
    .then(() => callback());

  return {
    type: DELETE_POST,
    payload: id
  }
}