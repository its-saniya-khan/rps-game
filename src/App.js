import React, { useState, useCallback, useEffect } from 'react';
import { Wrapper } from './App.styles';
import Header from './components/Header';
import GamePanel from './components/GamePanel/index';

const OPTIONS = ["rock", "paper", "scissors"]

function App() {
  const [score, setScore] = useState(0);
  const [playerChoice, setPlayerChoice] = useState(null);
  const [houseChoice, setHouseChoice] = useState(null);

  useEffect(() => {
    if (houseChoice && playerChoice) {
      const playerChoiceIndex = OPTIONS.indexOf(playerChoice);
      const choiceToWin = playerChoiceIndex === 0 ? 2 : playerChoiceIndex - 1;
      if (OPTIONS[choiceToWin] === houseChoice) {
        setScore((prev) => prev + 1)
      }
    }
  }, [playerChoice, houseChoice])

  const handlePlayerChoice = useCallback((event,option) => {
    setPlayerChoice(option)
    const houseChoice = Math.floor(Math.random() * 3)
    setHouseChoice(OPTIONS[houseChoice])
  }, [])


  return (
    <Wrapper>
      <Header score={score} />
      <GamePanel handlePlayerChoice={handlePlayerChoice} />
    </Wrapper>
  );
}

export default App;
