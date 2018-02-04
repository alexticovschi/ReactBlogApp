import _ from 'lodash';
import { FETCH_POSTS, FETCH_POST } from '../actions';


export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_POST:
      // const post = action.payload.data;
      // const newState = { ...state };
      // // take the newState object and add on additional property of the post ID and set that equal to the post
      // newState[post.id] = post;
      // return newState;

      // Key interpolation
      // Make a new key on this object using the value of action.payload.data.id and 
      //   set its value equal to action.payload.data
      // As a user starts to fetch more show routes inside the application, fetch each 
      //   additional posts and add them into the overall state object
      return { ...state, [action.payload.data.id]: action.payload.data };

    case FETCH_POSTS:
      return _.mapKeys(action.payload.data, 'id');
    default: 
      return state;
    }  
}