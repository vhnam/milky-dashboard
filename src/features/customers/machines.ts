import {Machine, assign} from 'xstate';

import {Pagination} from '../../helpers/http';

import {invokeGetCustomers} from './services';
import {Customer} from './models';

interface CustomersSchema {
  states: {
    idle: {};
    loading: {};
    success: {};
    failure: {};
  };
}

export interface CustomersContext {
  data: Customer[];
  pagination?: Pagination;
}

export type CustomersEvent = {
  type: 'GET_CUSTOMERS';
  payload: {page: number; limit: number};
};

const context = {
  data: [],
};

export const customersMachine = Machine<
  CustomersContext,
  CustomersSchema,
  CustomersEvent
>({
  id: 'customers',
  initial: 'idle',
  context,
  states: {
    idle: {
      on: {
        GET_CUSTOMERS: 'loading',
      },
    },
    loading: {
      invoke: {
        id: 'get-customers',
        src: invokeGetCustomers,
        onDone: {
          target: 'success',
          actions: assign({
            data: (_, event) => event.data.data,
            pagination: (_, event) => event.data.pagination,
          }),
        },
        onError: {
          target: 'failure',
        },
      },
    },
    success: {},
    failure: {},
  },
});
