"use client";

import React from "react";
import styled from "styled-components";

const MainTemplateBlock = styled.div`
    width: 360px;
    height: 700px;
    flex-grow: 0;
    background-color: #fff;
    margin: 0 auto;
    /*
    width: 512px;
    height: 768px;

    position: relative;
    background: white;
    border-radius: 16px;
    box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.04);

    margin: 0 auto;

    margin-top: 96px;
    margin-bottom: 32px;
    display: flex;
    flex-direction: column;
    */
`;

const UnderBar = styled.div`
    width: 360px;
    height: 46px;
    margin: 0 0 63px;
    background-color: #d9d9d9;
    margin: 0 auto;
`;

interface Props {
    children: React.ReactNode;
}
function MainTemplate({ children }: Props) {
    return (
        <>
            <MainTemplateBlock>{children}</MainTemplateBlock>
            <UnderBar />
        </>
    );
}

export default MainTemplate;
