import React from "react";
import { mount } from "enzyme";
import { CommentList } from "Components/commentList";
import { Root } from "Root";
let wrapped;

const State = {
  commentReducer: ["Comment 1", "Comment 2"],
};
beforeEach(() => {
  wrapped = mount(
    <Root initialState={State}>
      <CommentList />
    </Root>
  );
});

afterEach(() => {
  wrapped.unmount();
});

test("create one LI per comment", () => {
  expect(wrapped.find("li").length).toEqual(2);
});

test("Show text for each comment", () => {
  expect(wrapped.render().text()).toContain("Comment 1");
  expect(wrapped.render().text()).toContain("Comment 2");
});
