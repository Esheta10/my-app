import React, { Component } from "react";
import axios from "axios"

class PostForm extends Component {
  constructor(props) {
    super(props);
    // Initial state for all form fields
    this.state = {
      userId: "",
      title: "",
      body: "",
    };
  }
  // Handles changes in any input field
  // Uses computed property name: [e.target.name]
  // So one handler works for all inputs
  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  // Handles form submit
  // Prevents page reload and logs form data
  submitHandler = (e) => {
    e.preventDefault();
    console.log(this.state);
  };
  render() {
    // Destructure state for cleaner code
    const { userId, title, body } = this.state;
    return (
      <div>
        {/* The form tag triggers submitHandler on submit */}

        <form onSubmit={this.submitHandler}>
          <div>
            <input
              type="text"
              name="userId"
              value={userId}
              onChange={this.changeHandler}
            ></input>
          </div>
          <div>
            <input
              type="text"
              name="title"
              value={title}
              onChange={this.changeHandler}
            ></input>
          </div>
          <div>
            <input
              type="text"
              name="body"
              value={body}
              onChange={this.changeHandler}
            ></input>
          </div>
          {/* SUBMIT BUTTON (must be inside form) */}
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default PostForm;
