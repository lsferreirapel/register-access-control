import React from 'react';

import {
  User, Icon, NameContainer, Date, Hour, StyledCard,
} from '../styles/components/StyledCard';

interface DashboardCardProps {
  name: string;
  id: string;
  date: string;
  hour: string;
}

const DashboardCard = ({
  name, id, date, hour,
}:DashboardCardProps) => (
  <StyledCard>
    <User>
      <Icon />
      <NameContainer>
        <span className="name">{name}</span>
        <span className="id">{id}</span>
      </NameContainer>
    </User>
    <Date>{date}</Date>
    <Hour>{hour}</Hour>
  </StyledCard>
);

export default DashboardCard;
