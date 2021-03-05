import React, { Component } from "react";
import { connect } from "react-redux";
class Commentlist extends Component {
  renderComments() {
    return this.props.comments.map((comment) => {
      return <li key={comment}>{comment}</li>;
    });
  }

  render() {
    return (
      <div>
        <ul>{this.renderComments()}</ul>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return { comments: state.commentReducer };
}

export const CommentList = connect(mapStateToProps)(Commentlist);
