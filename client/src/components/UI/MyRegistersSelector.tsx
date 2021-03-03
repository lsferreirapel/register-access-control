import React, { useState, useEffect } from 'react';
import { SvgIcon } from '@material-ui/core';

interface MyRegisterSelectorProps {
  active?: boolean;
}

const MyRegisterSelector = ({ active = false }:MyRegisterSelectorProps) => {
  const [color, setColor] = useState<string>('#A5A5A5');

  useEffect(() => {
    if (active) {
      setColor('#219653');
    }
  }, [color]);

  return (
    <SvgIcon style={{ color, fontSize: '1.75rem' }} viewBox="0 0 33 34">
      <path fillRule="evenodd" clipRule="evenodd" d="M30.9358 4.21668C31.7466 4.21668 32.404 4.93368 32.404 5.81746V31.621C32.404 32.5051 31.7648 33.2218 30.9459 33.2218H1.86209C1.05679 33.2218 0.403992 32.5048 0.403992 31.621V5.81746C0.403992 4.93338 1.04891 4.21668 1.87221 4.21668H6.22217V5.82808L1.85854 5.90361V31.6104H30.9494V5.82808H26.5858V4.21668H30.9358ZM20.7676 4.21668H19.3131V5.82808H20.7676V4.21668ZM13.4949 4.21668H12.0404V5.82808H13.4949V4.21668ZM7.99455 12.2737C7.819 12.2737 7.67672 12.4166 7.67672 12.5959V13.5628C7.67672 13.7408 7.81719 13.885 7.99455 13.885H24.8134C24.989 13.885 25.1313 13.7421 25.1313 13.5628V12.5959C25.1313 12.4179 24.9908 12.2737 24.8134 12.2737H7.99455ZM7.99455 18.7192C7.819 18.7192 7.67672 18.8622 7.67672 19.0414V20.0084C7.67672 20.1864 7.81719 20.3306 7.99455 20.3306H24.8134C24.989 20.3306 25.1313 20.1876 25.1313 20.0084V19.0414C25.1313 18.8635 24.9908 18.7192 24.8134 18.7192H7.99455ZM7.99455 25.1648C7.819 25.1648 7.67672 25.3078 7.67672 25.487V26.454C7.67672 26.632 7.81719 26.7762 7.99455 26.7762H24.8134C24.989 26.7762 25.1313 26.6332 25.1313 26.454V25.487C25.1313 25.309 24.9908 25.1648 24.8134 25.1648H7.99455ZM9.13127 7.43947C9.93459 7.43947 10.5858 5.99658 10.5858 4.21668C10.5858 2.43679 9.93459 0.993896 9.13127 0.993896C8.32794 0.993896 7.67672 2.43679 7.67672 4.21668C7.67672 5.99658 8.32794 7.43947 9.13127 7.43947ZM16.404 7.43947C17.2073 7.43947 17.8585 5.99658 17.8585 4.21668C17.8585 2.43679 17.2073 0.993896 16.404 0.993896C15.6007 0.993896 14.9494 2.43679 14.9494 4.21668C14.9494 5.99658 15.6007 7.43947 16.404 7.43947ZM23.6767 7.43947C24.48 7.43947 25.1313 5.99658 25.1313 4.21668C25.1313 2.43679 24.48 0.993896 23.6767 0.993896C22.8734 0.993896 22.2222 2.43679 22.2222 4.21668C22.2222 5.99658 22.8734 7.43947 23.6767 7.43947Z" />
    </SvgIcon>
  );
};

MyRegisterSelector.defaultProps = {
  active: false,
};

export default MyRegisterSelector;
