import React from "react";
import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

import MainTemplate from "./MainTemplate";
import MainHead from "./MainHead";
import MainSpeak from "./MainSpeak";
// import { useSpeechRecognition } from "react-speech-kit";
import "./App.css";
import Loading from "./Loading";
import InfoButton from "./InfoButton"

const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef;
    
  }
;
`;

function App() {
    return (
        <>
            <GlobalStyle />
            <MainWrapper>
                <MainHead />
                <Title>
                    무엇을
                    <br />
                    예약해드릴까요?
                </Title>
                <Loading></Loading>
                <InfoButton text='aa'></InfoButton>
                <MainSpeak />
                {/* <MainTemplate /> */}
            </MainWrapper>
        </>
    );
}

export default App;

const Title = styled.h1`
    width: 300px;
    text-align: center;
    margin: 0 auto;
    margin-top: 63px;
`;

const MainWrapper = styled.div`
    max-width: 360px;
    width: 360px;
    background-color: #d9d9d9;
    height: 692px;
    margin: 0 auto;
`;
