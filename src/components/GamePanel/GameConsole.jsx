import React from "react";
import { ConsoleWrapper } from "../../App.styles";
import { CONSOLE_CONFIG } from "./config";


const GameConsole = ({ handlePlayerChoice, option }) => {
    return (
        <ConsoleWrapper onClick={(e) => handlePlayerChoice(e,option)} css={CONSOLE_CONFIG[option].style}>
            <img src={CONSOLE_CONFIG[option].svg} alt={option} />
        </ConsoleWrapper>
    )
}

export default GameConsole
