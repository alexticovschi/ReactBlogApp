import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchPosts } from '../actions';

// After the component is rendered in the DOM, the action creator
//  is called to go and fetch the list of posts
// After the ajax request is complete the action creator finishes, the 
//  promise resolves, the state is recalculated and the component rerenders
//  with a list of posts
class PostsIndex extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }


  // Map over the list of posts and generate one <li> for every post that is fetched
  // To map over the object that contains different posts, use lodash map function
  //   which has the ability to deal with objects.
  //   Call map on an object, pass in the second function (the mapping function) and
  //   return an array, exactly what react needs when a list of components is rendered 
  renderPosts() {
    return _.map(this.props.posts, post => {
      return (
        <li className="list-group-item" key={post.id} >
          {/* Send the user to a route that has a given id, the id of the post that has been clicked */}
          <Link to={`/posts/${post.id}`}>
            {post.title}
          </Link>
        </li>
      )
    });
  }

  render () {
    return (
      <div>
        <div className="text-xs-right">
          <Link className="btn btn-primary" to="/posts/new">
            Add a Post
          </Link>
        </div>
        <h3>Posts</h3>
        <ul className="list-group">
          {this.renderPosts()}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { posts: state.posts };
}

export default connect(mapStateToProps, { fetchPosts })(PostsIndex);