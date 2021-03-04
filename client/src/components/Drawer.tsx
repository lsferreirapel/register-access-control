import React, { FormEvent, useContext } from 'react';

// Date time picker imports
import DateFnsUtils from '@date-io/date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';

import { Alert } from '@material-ui/lab';
import { CircularProgress } from '@material-ui/core';
import {
  Container, Header, Form, Title, Footer, DateTimeInput,
} from '../styles/components/StyledDrawer';
import { RegisteredTimesContext } from '../contexts/RegisteredTimesContext';

interface DrawerProps {
  toogle: boolean;
  setToogle(toogle: boolean): void;
}

const Drawer = ({ toogle, setToogle }: DrawerProps) => {
  const {
    createRegisteredTimeIsLoading,
    createRegisteredTimeError,
    username,
    timeRegistered,
    setTimeRegistered,
    CreateRegisteredTime,
  } = useContext(RegisteredTimesContext);

  async function handleCreateRegisteredTime(e: FormEvent) {
    e.preventDefault();
    await CreateRegisteredTime();
  }

  return (
    <Container anchor="right" open={toogle}>
      <Header>
        Novo Registro
      </Header>
      <Form>
        <section>
          <Title>
            <h4>Colaborador</h4>
            <h3>{username}</h3>
          </Title>

          <MuiPickersUtilsProvider utils={DateFnsUtils} locale={ptBR}>
            <DateTimeInput
              required
              label="Data/Hora"
              value={new Date(timeRegistered)}
              onChange={(date) => setTimeRegistered(date?.toISOString() ?? '')}
              ampm={false}
              format="dd/MM/yyyy HH:mm"
              inputVariant="standard"
              InputLabelProps={{ shrink: true }}
              placeholder="__/__/__ __:__"
            />
          </MuiPickersUtilsProvider>

        </section>
        { createRegisteredTimeIsLoading && <CircularProgress />}
        { createRegisteredTimeError && <Alert severity="error">{createRegisteredTimeError}</Alert> }
        <Footer>
          <button
            disabled={createRegisteredTimeIsLoading}
            className="save"
            type="button"
            onClick={(e) => handleCreateRegisteredTime(e)}
          >
            Salvar

          </button>
          <button
            disabled={createRegisteredTimeIsLoading}
            className="cancel"
            type="button"
            onClick={() => setToogle(!toogle)}
          >
            Cancelar

          </button>
        </Footer>
      </Form>
    </Container>
  );
};

export default Drawer;
