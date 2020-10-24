import React, {useContext} from 'react';

import {DashboardContext} from '../../contexts/DashboardContext';

import PageTitle from '../../components/PageTitle';

const LoyalCustomers = () => {
  const dashboardContext = useContext(DashboardContext);

  return (
    <>
      <PageTitle
        primary="Welcome back"
        secondary="Hi MilkTea guys,"
        onOpenSidebar={dashboardContext.onCloseSidebar}
      />
    </>
  );
};

export default LoyalCustomers;
