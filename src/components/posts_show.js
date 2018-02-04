import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchPost } from '../actions';


class PostsShow extends Component {
  // componentDidMount is automatically called once the component was rendered to the DOM
  // CALL the fetchPost action creator as soon as the component is mounted
  componentDidMount() {
    const { id } = this.props.match.params;
    // The action creator will fetch the post with a given id and get added to the post piece of state
    this.props.fetchPost(id);
  }

  render() {
    const { post } = this.props;

    // if there's no post object yet, return this div
    if (!post) {
      return <div>Loading...</div>
    }

    return (
      <div>
        <Link to="/">Back To Index</Link>
        <h3>{post.title}</h3>
        <h6>Categories: {post.categories}</h6>
        <p>{post.content}</p>
      </div>
    );
  }
}

function mapStateToProps({ posts }, ownProps) {
  return { post: posts[ownProps.match.params.id] };
}

export default connect(mapStateToProps, { fetchPost })(PostsShow);