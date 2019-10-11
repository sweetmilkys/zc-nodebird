import React from "react";
import Head from "next/head";
import { Provider } from "react-redux";
import { createStore, Store, compose, applyMiddleware } from "redux";
import withRedux from "next-redux-wrapper";

import AppLayout from "../components/AppLayout";
import reducer from "../reducers";

interface Props {
  Component: React.ElementType;
  store: Store;
}

const NodeBird: React.FC<Props> = ({ Component, store }) => {
  return (
    <Provider store={store}>
      <Head>
        <title>NodeBird</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/antd/3.16.2/antd.css"
        />
      </Head>
      <AppLayout>
        <Component />
      </AppLayout>
    </Provider>
  );
};

export default withRedux((initialState, options) => {
  const middlewares: never[] = [];
  const enhancer = compose(
    applyMiddleware(...middlewares),
    !options.isServer &&
      typeof (window as any).__REDUX_DEVTOOLS_EXTENSION__ !== "undefined"
      ? (window as any).__REDUX_DEVTOOLS_EXTENSION__()
      : (f: any) => f
  );
  const store = createStore(reducer, initialState, enhancer);
  return store;
})(NodeBird);
