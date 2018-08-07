import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import RootRoute from './rootRoute';
import ContactRoute from './contactRoute';
import NotFoundRoute from './notFoundRoute';
import ProductsRoute from './productsRoute';

import RouteWithSubRoutes from './routeWithSubRoutes';

const routes = [
  RootRoute,
  ContactRoute,
  ProductsRoute,
  NotFoundRoute
];

const IndexRoute = () => (
  <Router>
    <Switch>
      { routes.map((route, i) => <RouteWithSubRoutes key={i} {...route} />) }
    </Switch>
  </Router>
);

export default IndexRoute;
