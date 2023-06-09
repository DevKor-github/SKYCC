import styled from "styled-components";
import { useMutation, useQuery } from "@tanstack/react-query";
import { stt } from "../api/stt";
import { useCallback, useState } from "react";
import MainSpeak from "../components/MainSpeak";

export default function Home() {
    const query = useMutation(["stt"], (data: any) => stt(data));
    const [loading, setLoading] = useState<boolean>(false);
    const data = "";
    const PostStt = useCallback(async () => {
        query.mutate(data, {});
    }, [query]);

    return (
        <>
            {!loading && (
                <H1>
                    무엇을
                    <br />
                    예약해드릴까요?
                </H1>
            )}
            <MainSpeak loading={loading} setLoading={setLoading}></MainSpeak>
        </>
    );
}

const H1 = styled.h1`
    width: 300px;
    text-align: center;
    margin: 0 auto;
    margin-top: 63px;
`;

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
`;
