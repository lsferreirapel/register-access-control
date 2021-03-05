import React, { useContext } from 'react';
import LogoIcon from '../assets/icons/icon.svg';
import { AuthContext } from '../contexts/AuthContext';
import { SidebarContext } from '../contexts/SidebarContext';

import {
  Container, Logo, Selectors, Selector, SelectorLabel,
} from '../styles/components/StyledSidebar';
import DashboardSelector from './UI/DashboardSelector';
import ExitIcon from './UI/ExitIcon';
import MyRegisterSelector from './UI/MyRegistersSelector';

const Sidebar = () => {
  const { logout } = useContext(AuthContext);
  const {
    dashboard,
    myRegisters,
    setDashboard,
    setMyRegisters,
  } = useContext(SidebarContext);

  function handleLogout() {
    logout();
    document.location.reload();
  }

  function handleDashboard() {
    setDashboard(true);
    setMyRegisters(false);
  }
  function handleMyRegister() {
    setDashboard(false);
    setMyRegisters(true);
  }

  return (
    <Container>
      <Selector to="">
        <Logo draggable={false} src={LogoIcon} alt="Logo icon" />
      </Selector>
      <Selectors>
        <Selector to="/" onClick={handleDashboard} active={dashboard}>
          <DashboardSelector />
          <SelectorLabel active={dashboard} className="dashboard">Dashboard</SelectorLabel>
        </Selector>
        <Selector to="/registers" onClick={handleMyRegister} active={myRegisters}>
          <MyRegisterSelector />
          <SelectorLabel active={myRegisters}>Meus Registros</SelectorLabel>
        </Selector>
      </Selectors>
      <button
        onClick={handleLogout}
        className="exit"
        type="button"
      >
        <ExitIcon />
      </button>
    </Container>
  );
};

export default Sidebar;
