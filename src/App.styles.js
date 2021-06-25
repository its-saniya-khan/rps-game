import styled, { css } from "styled-components";

const Wrapper = styled.div`
  background-image: radial-gradient(#1e3555, #131637);
  width: 100%;
  height: 100vh;
  color: #ebebf0;
  font-family: "Barlow Semi Condensed", sans-serif;
  display: flex;
  align-items: center;
  text-transform: uppercase;
`;

const GameContainer = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const HeaderWrapper = styled.div`
  width: 50%;
  height: 17%;
  border: 0.3rem solid #576883;
  border-radius: 1.5rem;
  padding: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: 700;
  img {
    height: 100%;
  }
  @media only screen and (max-width: 1024px) {
    width: 85%;
  }
`;

const ScoreWrapper = styled.div`
  width: 20%;
  height: 100%;
  background: #fafafa;
  border-radius: 1rem;
  display: flex;
  padding: 1rem;
  align-items: center;
  flex-direction: column;
  box-sizing: border-box;
  justify-content: space-between;
`;

const ScoreTitle = styled.div`
  color: #404e95;
  text-transform: uppercase;
  font-size: 1.5rem;
  font-weight: 600;
`;

const ScoreValue = styled.div`
  color: #59566c;
  font-size: 4rem;
`;

const Panel = styled.div`
  position: relative;
  width: 30%;
  height: 50%;
  @media only screen and (max-width: 1024px) {
    width: 65%;
    height: 50%;
  }
`;

const Background = styled.img`
  width: 100%;
  height: 100%;
`;

const ConsoleWrapper = styled.div`
  width: 11.5rem;
  height: 11.5rem;
  border-radius: 50%;
  background: #e3e3e3;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  img {
    width: 50%;
  }
  ${({ css }) => css}
`;

const Loader = styled.div`
  width: 11.5rem;
  height: 11.5rem;
  border-radius: 50%;
  background: #16213d;
`;

const GameResultWrapper = styled.div`
  height: 40%;
  display: flex;
  align-items: center;
  position: relative;
  justify-content: space-between;
  position: absolute;
  top: 60%;
  transform: translate(0, -50%);
  @media only screen and (max-width: 1024px) {
    width: 65%;
    height: 32%;
    top: 50%;
  }
`;

const PlayerTitle = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  margin: 0;
  white-space: nowrap;
`;

const WinnerText = styled.h1`
  font-size: 4rem;
  font-weight: 700;
  white-space: nowrap;
  margin: 2rem 0;
`;

const PlayAgainButton = styled.button`
  background: #f7f7f7;
  font-size: 1.2rem;
  color: #1e3555;
  border-radius: 1rem;
  padding: 1rem 4.5rem;
  text-transform: uppercase;
  font-weight: 600;
  cursor: pointer;
  &:hover {
    color: #dc3854;
  }
`;

const SelectedChoiceContainer = styled.div`
  height: 100%;
  width: 20%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
`;

const ResultContainer = styled.div`
  height: 100%;
  width: 31.25rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  @media only screen and (max-width: 1024px) {
    position: absolute;
    top: 80%;
    width: 100%;
  }
`;

export {
  Wrapper,
  GameContainer,
  HeaderWrapper,
  ScoreWrapper,
  ScoreTitle,
  ScoreValue,
  ConsoleWrapper,
  Panel,
  Background,
  GameResultWrapper,
  SelectedChoiceContainer,
  PlayerTitle,
  Loader,
  ResultContainer,
  WinnerText,
  PlayAgainButton,
};
