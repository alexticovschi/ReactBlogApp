import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class PostsNew extends Component {

  renderField(field) {
    return (
      <div className="form-group">
      <label htmlFor="title">{field.label}</label>
        <input 
          className="form-control"
          type="text"
          {...field.input}
        />
      </div>
    );
  }


  render() {
    return (
      <div>
        <form>
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
  if (values.title.length < 3) {
    errors.title = "Enter a title that is at least 3 characters!";
  }
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
})(PostsNew);