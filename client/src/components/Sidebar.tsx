import React from 'react';

// import { RiDashboardLine } from 'react-icons/ri';
// import { BiNotepad } from 'react-icons/bi';
// import { IoExitOutline } from 'react-icons/io5';
// import { ReactSVG } from 'react-svg';
import LogoIcon from '../assets/icons/icon.svg';

// import DashboardIcon from '../assets/icons/dashboard.svg';

import {
  Container, Logo, Selectors, Selector, SelectorLabel,
} from '../styles/components/StyledSidebar';
import DashboardSelector from './UI/DashboardSelector';
import ExitIcon from './UI/ExitIcon';
import MyRegisterSelector from './UI/MyRegistersSelector';

const Sidebar = () => (
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
    <button className="exit" type="button">
      <ExitIcon />
    </button>
  </Container>
);

export default Sidebar;
