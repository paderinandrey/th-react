import React from 'react';
import RenderDOM from 'react-dom';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import IndexRoute from './src/routes/indexRoute';

RenderDOM.render(
  <Router>
    <Switch>
      {IndexRoute()}
    </Switch>
  </Router>,
  document.getElementById('app')
);
