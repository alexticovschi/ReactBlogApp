import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createPost } from '../actions/';

class PostsNew extends Component {
  // The field object represents a single input or a single piece 
  //   of state that we are attempting to communicate to the user
  renderField(field) {
    const { meta: { touched, error } } = field;
    const className = `form-group ${touched && error ? 'has-danger' : ''}`;

    return (
      <div className={className}>
        <label>{field.label}</label>
        <input 
          className="form-control"  
          type="text"
          {...field.input}
        />
        <div className="text-danger">
          {/* this meta.error property is automatically added to the field object from the validate function */}
          {/* If the user has touched a field, show the error, otherwise show an empty string */}
          { touched ? error : '' }
        </div>      
      </div>
    );
  }

  onSubmit(values) {
    this.props.createPost(values);
  }

  render() {
    // handleSubmit is a property that is being passed to the component on behalf of redux form 
    const { handleSubmit } = this.props;

    return (
      <div>
        {/* Redux form is just responsible for handling the state and validation of the form */}
        {/* handleSubmit takes a defined function and runs the redux form of things like validation.
            Redux form will check if the form is valid and ready to be submitted, and then the callback
            function 'this.onSubmit' will be called and it will pass the values out of the form to work with */}

        <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
          {/* the Field component is responsible for event handling and updating our different pieces of state */}
          <Field
            label="Title for Post" 
            name="title"
            component={this.renderField}
          />
          <Field 
            label="Categories"
            name="categories"
            component={this.renderField}
          />
          <Field 
            label="Post Content"
            name="content"
            component={this.renderField}
          />
          <button type="submit" className="btn btn-primary">Submit</button>
          <Link to="/" className="btn btn-danger">Cancel</Link>
        </form>
      </div>
    );
  }
}

// values is an object that contains all the different values that a user has entered into the form
function validate(values) {
  const errors = {};

  // Validate the inputs from 'values'
  // At first, the values object is empty. Then a particular value on the values object 
  //   is checked and if this is not valid, then add a property to the errors object
  //   and assign it a message that will be displayed to the user
  if (!values.title) {
    errors.title = "Enter a title!";
  }
  if (!values.categories) {
    errors.categories = "Enter some categories";
  }
  if (!values.content) {
    errors.content = "Enter some content please";
  }


  // If form is empty, the form can be submitted
  // If errors has *any* properties, redux form assumes form is invalid
  //   and the form will not be submitted
  return errors;

}
 


export default reduxForm({ 
  validate,
  form: 'PostsNewForm' 
})(
  connect(null, { createPost })(PostsNew)
);