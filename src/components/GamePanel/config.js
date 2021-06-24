import Rock from "./../../assets/rock.svg"
import Paper from "./../../assets/paper.svg"
import Scissors from "./../../assets/scissors.svg";
import { css } from "styled-components";

const OPTIONS = ["rock", "paper", "scissors"];

const RockCSS = css`
    top: 80%;
    left: 50%;
    transform: translate(-50%,-50%);
    box-shadow: 0 0 0 2rem #dc3854, 0px 0.67rem 0 2.5rem #9e1635, inset 0 0.67rem 0 0 #babfd2;
`;

const PaperCSS = css`
    top: 0%;
    left: 10%;
    transform: translate(-50%,-50%);
    box-shadow: 0 0 0 2rem #5671f4, 0px 0.67rem 0 2.5rem #2b47bd, inset 0 0.67rem 0 0 #babfd2;
`;

const ScissorsCSS = css`
    top: 0%;
    left: 90%;
    transform: translate(-50%,-50%);
    box-shadow: 0 0 0 2rem #e99f10, 0px 0.67rem 0 2.5rem #b47037, inset 0 0.67rem 0 0 #babfd2;
`;


const CONSOLE_CONFIG = {
    rock: {
        style: RockCSS,
        svg: Rock
    },
    paper: {
        style: PaperCSS,
        svg: Paper
    },
    scissors: {
        style: ScissorsCSS,
        svg: Scissors
    }
}

export {
    OPTIONS,
    CONSOLE_CONFIG
}