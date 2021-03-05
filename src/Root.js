import React from "react";
import { Provider } from "react-redux";
import { store } from "Redux/store";

function Root({ children, initialState = {} }) {
  return <Provider store={store(initialState)}>{children}</Provider>;
}

export { Root };
