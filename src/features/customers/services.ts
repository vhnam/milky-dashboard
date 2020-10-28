import axios from 'axios';
import qs from 'qs';

import config from '../../config';
import {buildQueryString, parsePagination} from '../../helpers/http';

import {CustomersContext, CustomersEvent} from './machines';

export const invokeGetCustomers = (
  _: CustomersContext,
  event: CustomersEvent,
) => {
  const queryString = qs.stringify({
    _page: event.payload.page,
    _limit: event.payload.limit,
  });
  const url = buildQueryString(config.api.customers, queryString);

  return axios.get(url).then((response) => {
    const pagination = parsePagination(response.headers);

    return {
      data: response.data,
      pagination,
    };
  });
};
