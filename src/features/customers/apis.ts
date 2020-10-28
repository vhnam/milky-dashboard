import axios from 'axios';
import qs from 'qs';

import config from '../../config';

import {
  buildQueryString,
  Pagination,
  parsePagination,
} from '../../helpers/http';

import {Customer} from './models';

interface getCustomersResponse {
  data: Customer[];
  pagination: Pagination;
}

export const getCustomers = async (
  key: string,
  page: number = 1,
): Promise<getCustomersResponse> => {
  const queryString = qs.stringify({
    _page: page,
    _limit: 5,
  });
  const url = buildQueryString(config.api.customers, queryString);
  const {data, headers} = await axios.get(url);

  return {
    data,
    pagination: parsePagination(headers),
  };
};
