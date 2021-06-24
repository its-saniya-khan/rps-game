import React from "react";
import { OPTIONS } from "./config";
import GameConsole from "./GameConsole";
import { Panel, Background } from "./../../App.styles";
import Triangle from "./../../assets/bg-triangle.svg";

const GamePanel = ({ handlePlayerChoice }) => {

    return (
        <Panel>
            <Background src={Triangle} alt="Background Triangle" />
            {
                OPTIONS.map((value) => <GameConsole key={value} handlePlayerChoice={handlePlayerChoice} option={value} />)
            }
        </Panel>
    )
}

export default GamePanel
