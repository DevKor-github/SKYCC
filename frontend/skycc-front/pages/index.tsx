import styled from "styled-components";
import { useMutation, useQuery } from "@tanstack/react-query";
import { stt } from "../api/stt";
import { useCallback } from "react";
import { useState, useEffect } from "react";
import { useAudioRecorder } from "react-audio-voice-recorder";
import axios from "axios";
import MainSpeak from "../components/MainSpeak";

export default function Home() {
    const query = useMutation(["stt"], (data: any) => stt(data));

    const data = "";
    const PostStt = useCallback(async () => {
        query.mutate(data, {});
    }, [query]);

    return (
        <>
            <H1>
                무엇을
                <br />
                예약해드릴까요?
            </H1>
            <MainSpeak></MainSpeak>
        </>
    );
}

const H1 = styled.h1`
    width: 300px;
    text-align: center;
    margin: 0 auto;
    margin-top: 63px;
`;
