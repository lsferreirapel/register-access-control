import React, { useState, useEffect, useContext } from 'react';
import { SvgIcon } from '@material-ui/core';
import { SidebarContext } from '../../contexts/SidebarContext';

const DashboardSelector = () => {
  const [color, setColor] = useState<string>('#A5A5A5');
  const { dashboard } = useContext(SidebarContext);

  useEffect(() => {
    if (dashboard) {
      setColor('#219653');
    } else {
      setColor('#A5A5A5');
    }
  }, [dashboard]);

  return (
    <SvgIcon style={{ color, fontSize: '1.75rem' }} viewBox="0 0 26 26">
      <path d="M13.5 0.0354004H25.1667V8.84771H13.5V0.0354004ZM13.5 25.0036V10.3164H25.1667V25.0036H13.5ZM0.375 25.0036V16.1913H12.0417V25.0036H0.375ZM0.375 14.7226V0.0354004H12.0417V14.7226H0.375ZM1.83333 1.50412V13.2539H10.5833V1.50412H1.83333ZM14.9583 1.50412V7.37899H23.7083V1.50412H14.9583ZM14.9583 11.7851V23.5349H23.7083V11.7851H14.9583ZM1.83333 17.66V23.5349H10.5833V17.66H1.83333Z" />
    </SvgIcon>
  );
};

DashboardSelector.defaultProps = {
  active: false,
};

export default DashboardSelector;
