import React from 'react';
import RenderDOM from 'react-dom';

import IndexRoute from './src/routes/indexRoute';

RenderDOM.render(
  <div>
    {IndexRoute()}
  </div>,
  document.getElementById('app')
);
