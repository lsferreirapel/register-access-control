import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';

import {
  User, Icon, NameContainer, Date, Hour,
} from '../styles/components/StyledCard';

const useStyles = makeStyles({
  root: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    Height: '4.563rem',
    padding: '19px 21px',
    marginBottom: '2.188rem',
    borderRadius: 15,
    boxShadow: '0px 0px 12px rgba(0, 0, 0, 0.1)',
  },
});

interface DashboardCardProps {
  name: string;
  id: string;
  date: string;
  hour: string;
}

const DashboardCard = ({
  name, id, date, hour,
}:DashboardCardProps) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <User>
        <Icon />
        <NameContainer>
          <span className="name">{name}</span>
          <span className="id">{id}</span>
        </NameContainer>
      </User>
      <Date>{date}</Date>
      <Hour>{hour}</Hour>
    </Card>
  );
};

export default DashboardCard;
