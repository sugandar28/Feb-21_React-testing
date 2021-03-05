import { SAVE_COMMENT } from "Redux/actionTypes";
import { saveComment } from "Redux/actions";

describe("saveComment", () => {
  test("has correct type", () => {
    const action = saveComment();
    expect(action.type).toEqual(SAVE_COMMENT);
  });
  test("has correct payload", () => {
    const action = saveComment("New Comment");
    expect(action.payload).toEqual("New Comment");
  });
});
