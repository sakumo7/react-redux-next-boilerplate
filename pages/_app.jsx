import React from "react";
import App, { Container } from "next/app";
import withRedux from "next-redux-wrapper";
import { Provider } from "react-redux";
import withReduxSaga from "next-redux-saga";
import configureStore from "../services/redux/store";

class Dashboard extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps, store } = this.props;
    return (
      <Container>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </Container>
    );
  }
}

export default withRedux(configureStore)(withReduxSaga()(Dashboard));
