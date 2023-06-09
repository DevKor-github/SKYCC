"use client";

import React from "react";
import styled from "styled-components";
import { useState, useEffect } from "react";
import { useRecorder } from "react-recorder-voice";
import axios from "axios";
import Image from "next/image";
import human from "../public/human.svg";
import Loading from "./Loading";
import Router, { useRouter } from "next/router";

const Button = styled.button`
    margin: 0 auto;
    width: 286px;
    height: 147px;
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
/*
    .content {
        width: 279px;
        height: 60px;
        margin: 12/2px 41px 123.7px 40px;
        font-family: Inter;
        font-size: 100px;
        font-weight: 600;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: normal;
        text-align: center;
        color: #000;
    */
interface Prop {
    loading: boolean;
    setLoading: (bool: boolean) => void;
}

export function MainSpeak({ loading, setLoading }: Prop) {
    const [isRecording, setIsRecodring] = useState(false);
    const {
        audioURL,
        audioData,
        timer,
        recordingStatus,
        cancelRecording,
        saveRecordedAudio,
        startRecording,
    } = useRecorder();
    const [serverData, setServerData] = useState<any>();
    const router = useRouter();
    // MediaRecorder.isTypeSupported("audio/wav;codecs=MS_PCM");

    useEffect(() => {
        console.log(recordingStatus);
        if (recordingStatus === "save" && audioData !== null) {
            // console.log(audioData);
            console.log(audioData);
            setLoading(true);
            const formData = new FormData();
            formData.append("file", audioData, "audio.webm");

            axios
                .post(process.env.NEXT_PUBLIC_SERVER_URL + "", formData, {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                })
                .then((r) => {
                    console.log(r);
                    setServerData(r.data);
                    if (r.statusText === "Created") {
                        fetch("/api/slack");
                    }
                });
        }
    }, [audioData]);

    useEffect(() => {
        if (serverData) {
            router.push({
                pathname: "/done",
                query: {
                    depTime: serverData[0].departureTime,
                    depLoc: serverData[0].departureLocation,
                    arrTime: serverData[0].arrivalTime,
                    arrLoc: serverData[0].arrivalLocation,
                    price: serverData[0].price,
                },
            });
        }
    }, [serverData]);

    return (
        <div>
            {audioData === null && (
                <>
                    <Button
                        onClick={(e) => {
                            if (!isRecording) {
                                setIsRecodring(true);
                                //@ts-ignore
                                e.target.innerHTML = "중지";
                                //@ts-ignore
                                e.target.classList.add("recording");

                                startRecording();
                            } else {
                                setIsRecodring(false);
                                //@ts-ignore
                                e.target.innerText = "말하기";
                                //@ts-ignore
                                e.target.classList.remove("recording");
                                saveRecordedAudio();
                            }
                        }}
                    >
                        말하기
                    </Button>

                    <div
                        style={{
                            height: "270px",
                            width: "360px",
                            overflow: "hidden",
                        }}
                    >
                        <Image
                            style={{
                                margin: "0 auto",
                                display: "block",
                                marginTop: "40px",
                            }}
                            alt="human"
                            src={human}
                        />
                    </div>
                </>
            )}
            {audioData !== null && (
                <>
                    <h1
                        style={{
                            marginLeft: "90px",
                            marginTop: "200px",
                            width: "300px",
                            display: "block",
                        }}
                    >
                        처리중입니다
                        <br />
                    </h1>
                    <Loading></Loading>
                </>
            )}
        </div>
    );
}

export default MainSpeak;

/*

const CircleButton = styled.button`
  background: #38d9a9;
  &:hover {
    background: #63e6be;
  }
  &:active {
    background: #20c997;
  }

  z-index: 5;
  cursor: pointer;
  width: 80px;
  height: 80px;
  display: block;
  align-items: center;
  justify-content: center;
  font-size: 60px;
  position: absolute;
  left: 50%;
  bottom: 0px;
  transform: translate(-50%, 50%);
  color: white;
  border-radius: 50%;
  border: none;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;

  transition: 0.125s all ease-in;
  ${props =>
    props.open &&
    css`
      background: #ff6b6b;
      &:hover {
        background: #ff8787;
      }
      &:active {
        background: #fa5252;
      }
      transform: translate(-50%, 50%) rotate(45deg);
    `}
`;

const InsertFormPositioner = styled.div`
  width: 100%;
  bottom: 0;
  left: 0;
  position: absolute;
`;

const InsertForm = styled.form`
  background: #f8f9fa;
  padding-left: 32px;
  padding-top: 32px;
  padding-right: 32px;
  padding-bottom: 72px;

  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-top: 1px solid #e9ecef;
`;

const Input = styled.input`
  padding: 12px;
  border-radius: 4px;
  border: 1px solid #dee2e6;
  width: 100%;
  outline: none;
  font-size: 18px;
  box-sizing: border-box;
`;

function TodoCreate() {
  const [open, setOpen] = useState(false);

  const onToggle = () => setOpen(!open);

  return (
    <>
      {open && (
        <InsertFormPositioner>
          <InsertForm>
            <Input autoFocus placeholder="할 일을 입력 후, Enter 를 누르세요" />
          </InsertForm>
        </InsertFormPositioner>
      )}
      <CircleButton onClick={onToggle} open={open}>
        <MdAdd />
      </CircleButton>
    </>
  );
}

*/
