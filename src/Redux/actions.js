import axios from "axios";
import { SAVE_COMMENT, FETCH_COMMENTS } from "Redux/actionTypes";

const saveComment = (comment) => ({
  type: SAVE_COMMENT,
  payload: comment,
});

const fetchComment = () => {
  let response = axios.get("http://jsonplaceholder.typicode.com/comments");
  return {
    type: FETCH_COMMENTS,
    payload: response,
  };
};

export { saveComment, fetchComment };
