import React, { useState } from 'react';
import { createContext } from 'react';

const CreateGameContext = createContext({ step: 0 });

export const CreateGameProvider = ({ children }) => {
  const [teamSelectionMode, setTeamSelectionMode] = useState(0);
  const [nPlayers, setNPlayers] = useState(0);
  const [playersArray, setPlayersArray] = useState([]);

  function setSelectionMode(method) {
    setTeamSelectionMode(method);
  }

  function setNPlayersState(nPlayersState) {
    setNPlayers(nPlayersState);
  }

  function setPlayersArrayState(players) {
    setPlayersArray(players);
  }

  return (
    <CreateGameContext.Provider value={{ teamSelectionMode, setSelectionMode, setNPlayersState, nPlayers, playersArray, setPlayersArrayState }}>
      {children}
    </CreateGameContext.Provider>
  );
}
export default CreateGameContext;
