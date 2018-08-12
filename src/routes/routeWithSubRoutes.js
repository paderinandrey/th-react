import React from 'react';
import { Route } from 'react-router-dom';

const RouteWithSubRoutes = (route) => (
  <Route {...route} />
);

export default RouteWithSubRoutes;
