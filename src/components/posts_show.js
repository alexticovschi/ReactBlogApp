import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchPost } from '../actions';
import { deletePost } from '../actions';



class PostsShow extends Component {
  // componentDidMount is automatically called once the component was rendered to the DOM
  // CALL the fetchPost action creator as soon as the component is mounted
  componentDidMount() {
    const { id } = this.props.match.params;
    // The action creator will fetch the post with a given id and get added to the post piece of state
    this.props.fetchPost(id);
  }

  onDeleteClick() {
    const { id } = this.props.match.params;

    // Whenever the user clicks on the delete button to delete a post, wait for the
    //   request to be completed and then navigate the user back to the list of posts
    this.props.deletePost(id, () => {
      this.props.history.push('/');
    });
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
        <button 
          className="btn btn-danger pull-xs-right"
          onClick={() => this.onDeleteClick()}
        >
          Delete Post
        </button>
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

export default connect(mapStateToProps, { fetchPost, deletePost })(PostsShow);