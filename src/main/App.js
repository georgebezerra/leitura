import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import LoadingBar from 'react-redux-loading';
import Routes from './Routes';
import { BrowserRouter } from 'react-router-dom';
import { handleInitialData } from '../store/actions/shared';

import Header from '../components/layout/Header';
import Nav from './Nav';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }
  render() {
    return (
      <BrowserRouter>
        <Fragment>
          <LoadingBar />
          <div className="container">
            <Header />
            <Nav />
            <Routes />
          </div>
        </Fragment>
      </BrowserRouter>
    );
  }
}

function mapStateToProps({ authedUser }) {
  return {
    loading: authedUser === null
  };
}

export default connect(mapStateToProps)(App);
