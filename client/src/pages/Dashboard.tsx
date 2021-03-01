import React from 'react';
import Card from '../components/Card';
import Sidebar from '../components/Sidebar';

import {
  Container, CardListHead, CardListBody, CardList,
} from '../styles/pages/StyledDashboard';

export const dataExample = [
  {
    id: 1,
    timeRegistered: '2019-09-18T22:00:52.000Z',
    user: {
      id: 3,
      name: 'João Silva',
    },
  },
  {
    id: 2,
    timeRegistered: '2021-01-24T16:44:26.000Z',
    user: {
      id: 1,
      name: 'Administrador',
    },
  },
  {
    id: 3,
    timeRegistered: '2021-01-24T16:44:53.000Z',
    user: {
      id: 1,
      name: 'Administrador',
    },
  },
];

const Dashboard: React.FC = () => (
  <Container>
    <Sidebar />
    <CardList>
      <CardListHead>
        <h3>Colaborador</h3>
        <h3>Data</h3>
        <h3>Hora</h3>
      </CardListHead>
      <CardListBody>
        {dataExample.map((data) => {
          const time = new Date(data.timeRegistered);
          const date = `${String(time.getDay()).padStart(2, '0')}/${String(time.getMonth()).padStart(2, '0')}/${time.getFullYear()}`;
          const hour = `${String(time.getHours()).padStart(2, '0')}:${String(time.getMinutes()).padStart(2, '0')}h`;

          return <Card key={data.id} id={String(data.user.id).padStart(3, '0')} name={data.user.name} date={date} hour={hour} />;
        })}
      </CardListBody>
    </CardList>
  </Container>
);

export default Dashboard;
