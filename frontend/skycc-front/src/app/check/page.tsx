"use client";

import Link from "next/link";
import styled from "styled-components";
import { H1 } from "../page";

export default function Done() {
    return (
        <div>
            <H1>
                예약이
                <br />
                완료되었습니다.
            </H1>
            <div
                style={{
                    width: "286px",
                    marginTop: "50px",
                    marginLeft: "auto",
                    marginRight: "auto",
                }}
            >
                <Btn style={{ marginBottom: "16px" }}>예약 내역 확인</Btn>
                <Btn>
                    <Link href={"/"}>처음 화면</Link>
                </Btn>
            </div>
        </div>
    );
}

const Btn = styled.button`
    width: 286px;
    height: 105px;

    background: #fa7d37;
    border-radius: 30px;

    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 40px;
    line-height: 48px;
    text-align: center;

    a {
        text-decoration: none;
        color: black;
    }
`;
