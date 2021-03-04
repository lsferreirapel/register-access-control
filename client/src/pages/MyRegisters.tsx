import React, { useContext, useEffect, useState } from 'react';
import CardList from '../components/CardList';
import Sidebar from '../components/Sidebar';
import { RegisteredTimesContext } from '../contexts/RegisteredTimesContext';
import { SidebarContext } from '../contexts/SidebarContext';

import { Container, RegisterDrawer } from '../styles/pages/StyledMyRegisters';

const MyRegisters = () => {
  const {
    RegisteredTimesByUserIdData,
    allRegisteredTimesIsLoading,
    RegisteredTimesByUserIdError,
  } = useContext(RegisteredTimesContext);

  const [toogleDrawer, setToogleDrawer] = useState<boolean>(false);
  const { setDashboard, setMyRegisters } = useContext(SidebarContext);

  useEffect(() => {
    setDashboard(false);
    setMyRegisters(true);
  }, []);

  function handleToogleDrawer() {
    setToogleDrawer(!toogleDrawer);
  }

  return (
    <Container>
      <div className="button-container">
        <button type="button" onClick={handleToogleDrawer}>Registrar</button>
      </div>
      <RegisterDrawer anchor="right" open={toogleDrawer}>
        <header>
          Novo Registro
        </header>
        <section>
          <div className="title">
            <h4>Colaborador</h4>
            <h3>João Silva</h3>
          </div>
          <form className="date-time">
            <label htmlFor="date">
              Data/Hora
              <input
                id="date"
                type="datetime-local"
              />
            </label>
          </form>
        </section>
        <footer>
          <button
            className="save"
            type="button"
            onClick={handleToogleDrawer}
          >
            Salvar

          </button>
          <button
            className="cancel"
            type="button"
            onClick={handleToogleDrawer}
          >
            Cancelar

          </button>
        </footer>
      </RegisterDrawer>
      <Sidebar />
      <CardList
        RegisteredTimesData={RegisteredTimesByUserIdData}
        RegisteredTimesIsLoading={allRegisteredTimesIsLoading}
        RegisteredTimesError={RegisteredTimesByUserIdError}
      />
    </Container>
  );
};

export default MyRegisters;
