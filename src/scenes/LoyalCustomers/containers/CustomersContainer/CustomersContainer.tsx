import React, {useCallback, useEffect, useState} from 'react';
import {usePaginatedQuery, useQueryCache} from 'react-query';

import {getCustomers} from '../../../../features/customers/apis';

import Customers from '../../components/Customers';

const CustomersContainer = () => {
  const cache = useQueryCache();
  const [page, setPage] = useState(1);

  const {status, resolvedData, latestData, isFetching} = usePaginatedQuery(
    ['customers', page],
    getCustomers,
    {},
  );

  const handlePrevious = useCallback(() => {
    if (latestData?.pagination?.prev) {
      setPage(page - 1);
    }
  }, [page, latestData?.pagination?.prev]);

  const handleNext = useCallback(() => {
    if (latestData?.pagination?.next) {
      setPage(page + 1);
    }
  }, [page, latestData?.pagination?.next]);

  useEffect(() => {
    if (latestData?.pagination?.next) {
      cache.prefetchQuery(['projects', page], getCustomers);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [latestData, getCustomers, page]);

  return (
    <Customers
      customers={resolvedData?.data}
      isLoading={'loading' === status}
      isFetching={isFetching}
      onPrevious={handlePrevious}
      onNext={handleNext}
      canPrevious={Boolean(resolvedData?.pagination?.prev)}
      canNext={Boolean(resolvedData?.pagination?.next)}
    />
  );
};

export default CustomersContainer;
