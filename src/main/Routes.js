import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from '../components/dashboard/Home';
import PageReact from './../components/dashboard/PageReact';
import PageRedux from './../components/dashboard/PageRedux';
import Udacity from './../components/dashboard/Udacity';
import NewPost from './../components/dashboard/NewPost';

export default class Routes extends Component {
  render() {
    return (
      <main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/pagereact" component={PageReact} />
          <Route path="/pageredux" component={PageRedux} />
          <Route path="/udacity" component={Udacity} />
          <Route path="/newpost" component={NewPost} />
        </Switch>
      </main>
    );
  }
}
