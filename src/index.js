import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route } from 'react-router-dom';
import promise from 'redux-promise';


import reducers from './reducers';
import PostsIndex from './components/posts_index';
import PostsNew from './components/posts_new';


const createStoreWithMiddleware = applyMiddleware(promise)(createStore);



ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        {/* Whenever evry user goes to the path of just slash
          show the component PostsIndex */}
        <Route path="/" component={PostsIndex} />
        <Route path="/posts/new" component={PostsNew} />        
      </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
