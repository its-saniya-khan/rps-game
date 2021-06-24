import React from "react";
import { HeaderWrapper, ScoreWrapper, ScoreTitle, ScoreValue } from "../App.styles";
import Logo from "../assets/logo.svg"

const Header = ({ score }) => {

    return (
        <HeaderWrapper>
            <img src={Logo} />
            <ScoreWrapper>
                <ScoreTitle>Score</ScoreTitle>
                <ScoreValue>{score}</ScoreValue>
            </ScoreWrapper>
        </HeaderWrapper>
    )
}

export default Header
