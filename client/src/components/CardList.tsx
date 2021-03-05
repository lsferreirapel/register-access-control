import React from 'react';
import { AlertTitle } from '@material-ui/lab';
import Card from './Card';

import {
  Container,
  CardListHead,
  CardListBody,
  Loading,
  Error,
} from '../styles/components/StyledCardList';
import { GetRegisteredTimesOutput } from '../contexts/query';

interface CardListProps {
  RegisteredTimesData: GetRegisteredTimesOutput | undefined;
  RegisteredTimesIsLoading: boolean;
  RegisteredTimesError: string;
}

const CardList = ({
  RegisteredTimesData,
  RegisteredTimesIsLoading,
  RegisteredTimesError,
}: CardListProps) => (
  <>
    { RegisteredTimesIsLoading ? (
      <Loading size="4.688rem" />
    ) : (
      <>
        { RegisteredTimesError ? (
          <Error severity="error">
            <AlertTitle>Error</AlertTitle>
            {RegisteredTimesError}
          </Error>
        ) : (
          <Container>
            <CardListHead>
              <h3>Colaborador</h3>
              <h3>Data</h3>
              <h3>Hora</h3>
            </CardListHead>
            <CardListBody>
              {RegisteredTimesData?.registeredTimes.map((registeredTime) => {
                const time = new Date(registeredTime.timeRegistered);
                const date = `${String(time.getDay()).padStart(2, '0')}/${String(time.getMonth() + 1).padStart(2, '0')}/${time.getFullYear()}`;
                const hour = `${String(time.getHours()).padStart(2, '0')}:${String(time.getMinutes()).padStart(2, '0')}h`;

                return <Card key={registeredTime.id} id={String(registeredTime.user.id).padStart(3, '0')} name={registeredTime.user.name} date={date} hour={hour} />;
              }).reverse()}
            </CardListBody>
          </Container>
        )}
      </>
    )}
  </>

);

export default CardList;
