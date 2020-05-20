import React, { useState } from 'react';
import { createContext } from 'react';

const CreateGameContext = createContext({ step: 0 });

export const CreateGameProvider = ({ children }) => {
  const [teamSelectionMode, setTeamSelectionMode] = useState(0);
  const [nPlayers, setNPlayers] = useState(0);
  const [playersArray, setPlayersArray] = useState([]);
  const [teams, setTeams] = useState({});

  function setSelectionMode(method) {
    setTeamSelectionMode(method);
  }

  function setNPlayersState(nPlayersState) {
    setNPlayers(nPlayersState);
  }

  function setPlayersArrayState(players) {
    setPlayersArray(players);
    shuffleTeams();
  }

  function shuffleTeams() {
    const randomArray = playersArray.sort(() => .5 - Math.random());

    const halfLength = Math.ceil(randomArray.length / 2);

    const teamA = randomArray.splice(0, halfLength);
    const teamB = randomArray;

    setTeams({
      teamA,
      teamB
    });
  }

  return (
    <CreateGameContext.Provider value={{ teamSelectionMode, setSelectionMode, setNPlayersState, nPlayers, playersArray, setPlayersArrayState, teams }}>
      {children}
    </CreateGameContext.Provider>
  );
}
export default CreateGameContext;
