import qs from 'qs';

import config from '../../config';

export interface Pagination {
  first: string;
  prev?: string;
  next?: string;
  last: string;
}

export const buildQueryString = (url: string, queryString: string) => {
  return `${url}${queryString ? `?${queryString}` : ''}`;
};

export const parsePagination = (headers: any): Pagination => {
  const keys = headers?.link.split(',');
  let pagination: Pagination = {
    first: '',
    last: '',
  };

  keys?.forEach((str: string) => {
    const tmp = str.split('; ');
    const key = tmp[1].replaceAll('"', '').replace('rel=', '');
    const value = qs.parse(tmp[0].replace(config.api.customers, ''))
      ? qs.parse(
          tmp[0]
            .replace(config.api.customers, '')
            .trim()
            .replace('<?', '')
            .replace('>', ''),
        )._page
      : undefined;

    pagination = Object.assign(pagination, {
      [key]: value ? parseInt(value.toString()) : undefined,
    });
  });

  return pagination;
};
