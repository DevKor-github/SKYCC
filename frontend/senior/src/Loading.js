import React from "react";
import styled from "styled-components";

const LoadingComponent = styled.div`
    width: 25px;
    height: 25px;
    margin-left: 35px;
    margin-right: 35px;
    border-radius: 50%;
    background: #FA7D37;
`
const LoadingContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 286px;
    height: 164px;
    margin-left: 35px;
`


const Loading = () => {
    return (
        <LoadingContainer>
            <LoadingComponent/>
            <LoadingComponent/>
            <LoadingComponent/>
        </LoadingContainer>
    )
}

export default Loading;