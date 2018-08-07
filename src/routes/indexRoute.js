import React from 'react';

import RootRoute from './rootRoute';
import ContactRoute from './contactRoute';

import RouteWithSubRoutes from './routeWithSubRoutes';

const routes = [
  RootRoute,
  ContactRoute
];

const IndexRoute = () =>
  routes.map((route, i) => <RouteWithSubRoutes key={i} {...route} />);

export default IndexRoute;
