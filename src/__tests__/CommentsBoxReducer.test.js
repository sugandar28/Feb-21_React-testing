import { commentReducer } from "Redux/reducer";
import { SAVE_COMMENT } from "Redux/actionTypes";

beforeEach(() => {});

afterEach(() => {});

test("handel action of type SAVE_COMMENT", () => {
  const action = {
    type: SAVE_COMMENT,
    payload: "New Comment",
  };
  const newState = commentReducer([], action);
  expect(newState).toEqual(["New Comment"]);
});

test("handel action with unkonwn type", () => {
  const newState = commentReducer([], {});
  expect(newState).toEqual([]);
});
