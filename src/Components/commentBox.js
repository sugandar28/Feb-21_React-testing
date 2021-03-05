import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "Redux/actions";
class Commentbox extends Component {
  state = {
    comment: "",
  };
  handleChange = (event) => {
    this.setState({ comment: event.target.value });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.saveComment(this.state.comment);
    this.setState({ comment: "" });
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h4>Add a comment</h4>
          <textarea value={this.state.comment} onChange={this.handleChange} />
          <div>
            <button>Submit Comment</button>
          </div>
        </form>
        <button onClick={this.props.fetchComment()}>Fetch Comment</button>
      </div>
    );
  }
}

export const CommentBox = connect(null, actions)(Commentbox);
