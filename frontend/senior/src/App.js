import React from 'react';
import { createGlobalStyle } from 'styled-components';
import styled from "styled-components";
import MainTemplate from './MainTemplate';
import MainHead from './MainHead';
import MainSpeak from './MainSpeak';
import { useSpeechRecognition } from "react-speech-kit";
import './App.css';

const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef;
  }
;
`

function App() {
  return (
    <>
      <GlobalStyle/>
      <MainHead/>
      <MainSpeak/>
      <MainTemplate/>
    </>
  );
}

export default App;

