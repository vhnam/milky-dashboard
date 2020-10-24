import {lazy} from 'react';

import config from './config';

const routes = [
  {
    path: config.app.loyalCustomers,
    component: lazy(() => import('./scenes/LoyalCustomers')),
  },
];

export default routes;
