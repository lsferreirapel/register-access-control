import React, { useContext, useEffect } from 'react';
import CardList from '../components/CardList';
import Sidebar from '../components/Sidebar';
import { RegisteredTimesContext } from '../contexts/RegisteredTimesContext';
import { SidebarContext } from '../contexts/SidebarContext';

import Container from '../styles/pages/StyledDashboard';

const Dashboard: React.FC = () => {
  const {
    allRegisteredTimesData,
    allRegisteredTimesIsLoading,
    allRegisteredTimesError,
  } = useContext(RegisteredTimesContext);
  const { setDashboard, setMyRegisters } = useContext(SidebarContext);

  useEffect(() => {
    setDashboard(true);
    setMyRegisters(false);
  }, []);

  return (
    <Container>
      <Sidebar />
      <CardList
        RegisteredTimesData={allRegisteredTimesData}
        RegisteredTimesIsLoading={allRegisteredTimesIsLoading}
        RegisteredTimesError={allRegisteredTimesError}
      />
    </Container>
  );
};

export default Dashboard;
