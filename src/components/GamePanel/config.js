import Rock from "./../../assets/rock.svg";
import Paper from "./../../assets/paper.svg";
import Scissors from "./../../assets/scissors.svg";
import { css } from "styled-components";

const OPTIONS = ["rock", "paper", "scissors"];

const RockCSS = css`
  position: absolute;
  top: 80%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 0 0 0 2rem #dc3854, 0px 0.67rem 0 2.5rem #9e1635,
    inset 0 0.67rem 0 0 #babfd2;
`;

const PaperCSS = css`
  position: absolute;
  top: 0%;
  left: 10%;
  transform: translate(-50%, -50%);
  box-shadow: 0 0 0 2rem #5671f4, 0px 0.67rem 0 2.5rem #2b47bd,
    inset 0 0.67rem 0 0 #babfd2;
`;

const ScissorsCSS = css`
  position: absolute;
  top: 0%;
  left: 90%;
  transform: translate(-50%, -50%);
  box-shadow: 0 0 0 2rem #e99f10, 0px 0.67rem 0 2.5rem #b47037,
    inset 0 0.67rem 0 0 #babfd2;
`;

const CustomRock = css`
  width: 13rem;
  height: 13rem;
  box-shadow: 0 0 0 2rem #dc3854, 0px 0.67rem 0 2.5rem #9e1635,
    inset 0 0.67rem 0 0 #babfd2;
`;

const CustomPaper = css`
  width: 13rem;
  height: 13rem;
  box-shadow: 0 0 0 2rem #5671f4, 0px 0.67rem 0 2.5rem #2b47bd,
    inset 0 0.67rem 0 0 #babfd2;
`;

const CustomScissors = css`
  width: 13rem;
  height: 13rem;
  box-shadow: 0 0 0 2rem #e99f10, 0px 0.67rem 0 2.5rem #b47037,
    inset 0 0.67rem 0 0 #babfd2;
`;

const CONSOLE_CONFIG = {
  rock: {
    style: RockCSS,
    svg: Rock,
  },
  paper: {
    style: PaperCSS,
    svg: Paper,
  },
  scissors: {
    style: ScissorsCSS,
    svg: Scissors,
  },
};

const WINNER_MAP = {
  player: "You win",
  house: "You lose",
};

const CUSTOM_CSS_RESULT = {
  rock: CustomRock,
  paper: CustomPaper,
  scissors: CustomScissors,
};

export { OPTIONS, CONSOLE_CONFIG, CUSTOM_CSS_RESULT, WINNER_MAP };
