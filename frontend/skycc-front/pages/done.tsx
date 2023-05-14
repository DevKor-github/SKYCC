"use client";

import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styled from "styled-components";

export default function Done() {
    const router = useRouter();
    const [q, setQ] = useState(null);
    const [ready, isReady] = useState(false);

    const [parsedDep, setParsedDep] = useState();
    const [parsedArr, setParsedArr] = useState();

    useEffect(() => {
        if (router.isReady) {
            //@ts-ignore
            setQ(router.query);
        }
    }, [router]);

    useEffect(() => {
        if (q) {
            //@ts-ignore
            setParsedDep(new Date(q.depTime));
            //@ts-ignore
            setParsedArr(new Date(q.arrTime));

            isReady(true);
        }
    }, [q]);
    return (
        <div>
            {ready && (
                <h2
                    style={{
                        fontSize: "28px",
                        textAlign: "center",
                        marginTop: "60px",
                        lineHeight: "40px",
                    }}
                >
                    {
                        //@ts-ignore
                        parsedDep.getMonth() + 1
                    }
                    월{" "}
                    {
                        //@ts-ignore
                        parsedDep.getDate()
                    }
                    일 <br />
                    {
                        //@ts-ignore
                        parsedDep.getHours() - 9 < 0
                            ? //@ts-ignore
                              parsedDep.getHours() + 24
                            : //@ts-ignore
                              parsedDep.getHours() - 9
                    }
                    시{" "}
                    {
                        //@ts-ignore
                        parsedDep.getMinutes()
                    }
                    분에
                    <br />
                    {
                        //@ts-ignore
                        q.depLoc
                    }
                    에서{" "}
                    {
                        //@ts-ignore
                        q.arrLoc
                    }
                    으로 가는 <br />
                    기차표 예매를
                    <br /> 자녀에게 요청했습니다.
                    <br />
                </h2>
            )}

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
    border: none;
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

const H1 = styled.h1`
    width: 300px;
    text-align: center;
    margin: 0 auto;
    margin-top: 63px;
`;
