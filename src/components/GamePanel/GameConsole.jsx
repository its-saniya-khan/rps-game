import React, { useCallback } from "react";
import { ConsoleWrapper, Loader } from "../../App.styles";
import { CONSOLE_CONFIG } from "./config";

const GameConsole = ({
  handlePlayerChoice,
  option,
  disabled = false,
  customCSS = null,
  winner = null,
}) => {
  const handleClick = useCallback(
    (e, option) => {
      if (!disabled) {
        handlePlayerChoice(option);
      }
    },
    [disabled, handlePlayerChoice]
  );

  return (
    <>
      {option && (
        <ConsoleWrapper
          onClick={(e) => handleClick(e, option)}
          css={customCSS || CONSOLE_CONFIG[option].style}
          winner={winner}
        >
          <img src={CONSOLE_CONFIG[option].svg} alt={option} />
        </ConsoleWrapper>
      )}
      {!!!option && <Loader />}
    </>
  );
};

export default GameConsole;
