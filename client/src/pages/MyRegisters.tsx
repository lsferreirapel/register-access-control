import React, {
  useContext, useEffect, useState,
} from 'react';
import CardList from '../components/CardList';
import Drawer from '../components/Drawer';
import Sidebar from '../components/Sidebar';
import { RegisteredTimesContext } from '../contexts/RegisteredTimesContext';
import { SidebarContext } from '../contexts/SidebarContext';

import { Container } from '../styles/pages/StyledMyRegisters';

const MyRegisters = () => {
  const {
    RegisteredTimesByUserIdData,
    RegisteredTimesByUserIdIsLoading,
    RegisteredTimesByUserIdError,
  } = useContext(RegisteredTimesContext);

  const { setDashboard, setMyRegisters } = useContext(SidebarContext);
  const [toogleDrawer, setToogleDrawer] = useState<boolean>(false);

  function handleToogleDrawer() {
    setToogleDrawer(!toogleDrawer);
  }

  useEffect(() => {
    setDashboard(false);
    setMyRegisters(true);
  }, []);

  return (
    <Container>
      <div className="button-container">
        <button type="button" onClick={handleToogleDrawer}>Registrar</button>
      </div>
      <Drawer toogle={toogleDrawer} setToogle={setToogleDrawer} />
      <Sidebar />
      <CardList
        RegisteredTimesData={RegisteredTimesByUserIdData}
        RegisteredTimesIsLoading={RegisteredTimesByUserIdIsLoading}
        RegisteredTimesError={RegisteredTimesByUserIdError}
      />
    </Container>
  );
};

export default MyRegisters;
