'use client'

import React from "react";
import styled from "styled-components";

const UpperBar = styled.div`
    width: 360px;
    height: 80px;
    margin: 0 0 63px;
    background-color: #fa7d37;
    margin: 0 auto;

    h1 {
        line-height: 60px;
        width: 135px;
        height: 68px;
        margin: 20px 225px 55px 0;
        font-family: "210_Sueopsigan_Regular";
        font-size: 35px;
        font-weight: bold;
        font-stretch: normal;
        font-style: normal;
        letter-spacing: normal;
        text-align: center;
        color: #000;
        padding-top: 15px;
    }
`;

function MainHead() {
    return (
        <UpperBar>
            <h1>해줘잉</h1>
        </UpperBar>
    );
}

export default MainHead;
