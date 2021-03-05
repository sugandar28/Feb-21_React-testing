import React from "react";
import { mount } from "enzyme";
import { CommentBox } from "Components/commentBox";
import { Root } from "Root";
let wrapped;

beforeEach(() => {
  wrapped = mount(
    <Root>
      <CommentBox />
    </Root>
  );
});

afterEach(() => {
  wrapped.unmount();
});

test("has a textbox and button", () => {
  expect(wrapped.find("textarea").length).toEqual(1);
  expect(wrapped.find("button").length).toEqual(1);
});
describe("the textarea", () => {
  beforeEach(() => {
    wrapped.find("textarea").simulate("change", {
      target: {
        value: "new comment",
      },
    });
    wrapped.update();
  });

  test("has a text area that user can type in ", () => {
    expect(wrapped.find("textarea").prop("value")).toEqual("new comment");
  });

  test("when form submitted, textarea gets empited", () => {
    expect(wrapped.find("textarea").prop("value")).toEqual("new comment");
    wrapped.find("form").simulate("submit");
    wrapped.update();
    expect(wrapped.find("textarea").prop("value")).toEqual("");
  });
});
