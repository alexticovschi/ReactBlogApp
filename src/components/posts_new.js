import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class PostsNew extends Component {

  renderTitleField(field) {
    return (
      <div>
        <input 
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
            name="title"
            component={this.renderTitleField}
          />
        </form>
      </div>
    );
  }
}


export default reduxForm({ form: 'PostsNewForm' })(PostsNew);