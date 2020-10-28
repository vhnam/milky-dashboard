export interface Pagination {
  first: string;
  prev?: string;
  next?: string;
  last: string;
}

export const buildQueryString = (url: string, queryString: string) => {
  return `${url}${queryString ? `?${queryString}` : ''}`;
};

export const parsePagination = (headers: any) => {
  const keys = headers?.link.split(',');
  let pagination = {};

  keys?.forEach((value: string) => {
    const tmp = value.split('; ');
    pagination = Object.assign(pagination, {
      [tmp[1].replaceAll('"', '').replace('rel=', '')]: tmp[0],
    });
  });

  return pagination;
};
