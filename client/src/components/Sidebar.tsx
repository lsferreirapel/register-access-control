import React, { useContext } from 'react';
import LogoIcon from '../assets/icons/icon.svg';
import { AuthContext } from '../contexts/AuthContext';

import {
  Container, Logo, Selectors, Selector, SelectorLabel,
} from '../styles/components/StyledSidebar';
import DashboardSelector from './UI/DashboardSelector';
import ExitIcon from './UI/ExitIcon';
import MyRegisterSelector from './UI/MyRegistersSelector';

const Sidebar = () => {
  const { logout } = useContext(AuthContext);

  function handleLogout() {
    logout();
    document.location.reload();
  }

  return (
    <Container>
      <Selector>
        <Logo draggable={false} src={LogoIcon} alt="Logo icon" />
      </Selector>
      <Selectors>
        <Selector active>
          <DashboardSelector active />
          <SelectorLabel active className="dashboard">Dashboard</SelectorLabel>
        </Selector>
        <Selector>
          <MyRegisterSelector />
          <SelectorLabel>Meus Registros</SelectorLabel>
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
