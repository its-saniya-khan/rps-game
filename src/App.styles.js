import styled from "styled-components";

const Wrapper = styled.div`
    background-image: radial-gradient(#1e3555, #131637);
    width: 100%;
    height: 100vh;
    color: #ebebf0;
    font-family: 'Barlow Semi Condensed', sans-serif;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
`;

const HeaderWrapper = styled.div`
    width: 50%;
    height: 13%;
    border: 0.3rem solid #576883;
    border-radius: 1.5rem;;
    padding: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-weight: 700;
    img{
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
    width: 25%;
    height: 38%;
    @media only screen and (max-width: 1024px) {
        width: 65%;
        height: 32%;
    }
`;

const Background = styled.img`
    width: 100%;
    height: 100%;
`;

const ConsoleWrapper = styled.div`
    width: 11.5rem;
    height: 11.5rem;
    position: absolute;
    border-radius: 50%;
    background: #e3e3e3;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    img{
        width: 50%;
    }
    ${({ css }) => css}
`;

export {
    Wrapper,
    HeaderWrapper,
    ScoreWrapper,
    ScoreTitle,
    ScoreValue,
    ConsoleWrapper,
    Panel,
    Background
};
