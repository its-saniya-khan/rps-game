import React from "react";
import {
  GameResultWrapper,
  SelectedChoiceContainer,
  PlayerTitle,
  ResultContainer,
  WinnerText,
  PlayAgainButton,
} from "./../../App.styles";
import GameConsole from "./GameConsole";
import { CUSTOM_CSS_RESULT, WINNER_MAP } from "./config";

const GameResult = ({ houseChoice, playerChoice, winner, handlePlayAgain }) => {
  return (
    <GameResultWrapper>
      <SelectedChoiceContainer>
        <PlayerTitle>You picked</PlayerTitle>
        <GameConsole
          option={playerChoice}
          disabled
          customCSS={CUSTOM_CSS_RESULT[playerChoice]}
          winner={winner === "player"}
        />
      </SelectedChoiceContainer>
      {!!houseChoice && !!playerChoice && (
        <ResultContainer>
          <WinnerText>{WINNER_MAP[winner] || `It's a tie!`}</WinnerText>
          <PlayAgainButton onClick={handlePlayAgain}>
            Play again
          </PlayAgainButton>
        </ResultContainer>
      )}
      <SelectedChoiceContainer>
        <PlayerTitle>The house picked</PlayerTitle>
        <GameConsole
          option={houseChoice}
          disabled
          customCSS={CUSTOM_CSS_RESULT[houseChoice]}
          winner={winner === "house"}
        />
      </SelectedChoiceContainer>
    </GameResultWrapper>
  );
};

export default GameResult;
