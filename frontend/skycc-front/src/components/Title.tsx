'use client'

import React from "react";
import styled from "styled-components";

const H1 = styled.h1`
    width: 300px;
    text-align: center;
    margin: 0 auto;
    margin-top: 63px;
`;

type Props = {
    children: JSX.Element | JSX.Element[];
};
function Title({children}:Props){
    return (
        <H1>{children}</H1>
    )
}

export default Title;