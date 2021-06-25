import React, { useState, useCallback, useEffect } from "react";
import { Wrapper, GameContainer } from "./App.styles";
import Header from "./components/Header";
import GamePanel from "./components/GamePanel/index";
import GameResult from "./components/GamePanel/GameResult";

const OPTIONS = ["rock", "paper", "scissors"];

function App() {
  const [score, setScore] = useState(0);
  const [playerChoice, setPlayerChoice] = useState(null);
  const [houseChoice, setHouseChoice] = useState(null);
  const [winner, setWinner] = useState(null);

  useEffect(() => {
    if (houseChoice && playerChoice) {
      if (playerChoice === houseChoice) {
        return;
      }
      const playerChoiceIndex = OPTIONS.indexOf(playerChoice);
      const choiceToWin = playerChoiceIndex === 0 ? 2 : playerChoiceIndex - 1;
      if (OPTIONS[choiceToWin] === houseChoice) {
        setScore((prev) => prev + 1);
        setWinner("player");
      } else {
        setWinner("house");
      }
    }
  }, [playerChoice, houseChoice]);

  const handlePlayerChoice = useCallback((option) => {
    setPlayerChoice(option);
    const houseChoice = Math.floor(Math.random() * 3);
    setTimeout(() => {
      setHouseChoice(OPTIONS[houseChoice]);
    }, [1000]);
  }, []);

  const handlePlayAgain = useCallback(() => {
    setPlayerChoice(null);
    setHouseChoice(null);
    setWinner(null);
  }, []);

  return (
    <Wrapper>
      <GameContainer>
        <Header score={score} />
        {!!!playerChoice && !!!houseChoice && (
          <GamePanel handlePlayerChoice={handlePlayerChoice} />
        )}
        {playerChoice && (
          <GameResult
            playerChoice={playerChoice}
            houseChoice={houseChoice}
            winner={winner}
            handlePlayAgain={handlePlayAgain}
          />
        )}
      </GameContainer>
    </Wrapper>
  );
}

export default App;
