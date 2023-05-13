import React from "react";
import styled from "styled-components";

const Button = styled.button`
    margin: 0 auto;
    width: 286px;
    height: 164px;
    display: block;
    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 50px;
    line-height: 61px;
    text-align: center;
    border: none;
    background: #fa7d37;
    border-radius: 30px;
    margin-top: 60px;
    &:hover {
        background-color: #99c6f5;
    }

    &.recording {
        background-color: #99c6f5;
    }
`;

const InfoButton = (children) => {
    return (
        <Button>{children}</Button>
    )
}

export default InfoButton;