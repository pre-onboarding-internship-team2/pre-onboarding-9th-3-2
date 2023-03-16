import React from 'react';
import { Navigate, useRoutes } from 'react-router-dom';

import Chart from 'pages/Chart';

export default function Router() {
  let element = useRoutes([
    {
      path: '/',
      element: <Navigate to="/chart" />,
    },
    {
      path: '/chart',
      element: <Chart />,
    },
  ]);
  return element;
}
