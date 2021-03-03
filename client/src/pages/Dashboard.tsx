import { AlertTitle } from '@material-ui/lab';
import React, { useContext } from 'react';
import Card from '../components/Card';
import Sidebar from '../components/Sidebar';
import { RegisteredTimesContext } from '../contexts/RegisteredTimesContext';

import {
  Container, CardListHead, CardListBody, CardList, Loading, Error,
} from '../styles/pages/StyledDashboard';

const Dashboard: React.FC = () => {
  const {
    allRegisteredTimesData,
    allRegisteredTimesIsLoading,
    allRegisteredTimesError,
  } = useContext(RegisteredTimesContext);

  return (
    <Container>
      <Sidebar />
      { allRegisteredTimesIsLoading ? (
        <Loading size="4.688rem" />
      ) : (
        <>
          { allRegisteredTimesError ? (
            <Error severity="error">
              <AlertTitle>Error</AlertTitle>
              {allRegisteredTimesError}
            </Error>
          ) : (
            <CardList>
              <CardListHead>
                <h3>Colaborador</h3>
                <h3>Data</h3>
                <h3>Hora</h3>
              </CardListHead>
              <CardListBody>
                {allRegisteredTimesData?.registeredTimes.map((registeredTime) => {
                  const time = new Date(registeredTime.timeRegistered);
                  const date = `${String(time.getDay()).padStart(2, '0')}/${String(time.getMonth()).padStart(2, '0')}/${time.getFullYear()}`;
                  const hour = `${String(time.getHours()).padStart(2, '0')}:${String(time.getMinutes()).padStart(2, '0')}h`;

                  return <Card key={registeredTime.id} id={String(registeredTime.user.id).padStart(3, '0')} name={registeredTime.user.name} date={date} hour={hour} />;
                })}
              </CardListBody>
            </CardList>
          )}
        </>
      )}
    </Container>
  );
};

export default Dashboard;
