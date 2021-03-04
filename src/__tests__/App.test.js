import React from "react";
import { shallow } from "enzyme";
import { App } from "../App";
import { CommentBox, CommentList } from "../Components";

let wrapped;
beforeEach(() => {
  wrapped = shallow(<App />);
});
test("shows a comment box", () => {
  expect(wrapped.find(CommentBox).length).toEqual(1);
});

test("shows a comment lists", () => {
  expect(wrapped.find(CommentList).length).toEqual(1);
});
