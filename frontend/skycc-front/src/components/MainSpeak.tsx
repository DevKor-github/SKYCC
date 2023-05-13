// 'use client'

// import React from "react";
// import styled from "styled-components";
// import { useState, useEffect } from "react";
// import { useAudioRecorder } from "react-audio-voice-recorder";
// // import { axios } from "axios";

// const Button = styled.button`
//     margin: 0 auto;
//     width: 286px;
//     height: 147px;
//     display: block;
//     font-family: "Inter";
//     font-style: normal;
//     font-weight: 600;
//     font-size: 50px;
//     line-height: 61px;
//     text-align: center;
//     border: none;
//     background: #fa7d37;
//     border-radius: 30px;
//     margin-top: 60px;
//     &:hover {
//         background-color: #99c6f5;
//     }

//     &.recording {
//         background-color: #99c6f5;
//     }
// `;
// /*
//     .content {
//         width: 279px;
//         height: 60px;
//         margin: 12/2px 41px 123.7px 40px;
//         font-family: Inter;
//         font-size: 100px;
//         font-weight: 600;
//         font-stretch: normal;
//         font-style: normal;
//         line-height: normal;
//         letter-spacing: normal;
//         text-align: center;
//         color: #000;
//     */

// function MainSpeak() {
//     const [isRecording, setIsRecodring] = useState(false);

//     const {
//         startRecording,
//         stopRecording,
//         togglePauseResume,
//         recordingBlob,
//         // isRecording,
//         isPaused,
//         recordingTime,
//     } = useAudioRecorder();

//     useEffect(() => {
//         if (!recordingBlob) return;
//         console.log(recordingBlob);

//         // recordingBlob will be present at this point after 'stopRecording' has been called
//     }, [recordingBlob]);

//     const onFinish = async () => {
//         const formData = new FormData();
//         formData.append("file", recordingBlob); //files[0] === upload file
//         // const value = [
//         //     {
//         //         title: "hello",
//         //         content: "wolrd",
//         //     },
//         // ];

//         // const blob = new Blob({
//         //     type: "audio/webm",
//         // });

//         // formData.append("data", blob); // 또는  formData.append("data", JSON.stringify(value)); // JSON 형식으로 파싱.(백엔드의 요청에 따라 전송방식이 달라진다.)
//         await axios({
//             method: "POST",
//             url: `http://localhost:3000/`,
//             headers: {
//                 "Content-Type": "multipart/form-data", // Content-Type을 반드시 이렇게 하여야 한다.
//             },
//             data: formData, // data 전송시에 반드시 생성되어 있는 formData 객체만 전송 하여야 한다.
//         });
//     };

//     return (
//         <div>
//             <Button
//                 onClick={(e) => {
//                     if (isRecording) {
//                         setIsRecodring(false);
//                         e.target.innerHTML = "중지";
//                         e.target.classList.add("recording");
//                         startRecording();
//                     } else {
//                         setIsRecodring(true);
//                         e.target.innerText = "말하기";
//                         e.target.classList.remove("recording");
//                         stopRecording();
//                     }
//                 }}
//             >
//                 말하기
//             </Button>

//             <div
//                 style={{ height: "260px", width: "360px", overflow: "hidden" }}
//             >
//                 <img
//                     style={{
//                         margin: "0 auto",
//                         display: "block",
//                         marginTop: "40px",
//                     }}
//                     src="./human.svg"
//                 />
//             </div>
//         </div>
//     );
// }

// export default MainSpeak;

// /*

// const CircleButton = styled.button`
//   background: #38d9a9;
//   &:hover {
//     background: #63e6be;
//   }
//   &:active {
//     background: #20c997;
//   }

//   z-index: 5;
//   cursor: pointer;
//   width: 80px;
//   height: 80px;
//   display: block;
//   align-items: center;
//   justify-content: center;
//   font-size: 60px;
//   position: absolute;
//   left: 50%;
//   bottom: 0px;
//   transform: translate(-50%, 50%);
//   color: white;
//   border-radius: 50%;
//   border: none;
//   outline: none;
//   display: flex;
//   align-items: center;
//   justify-content: center;

//   transition: 0.125s all ease-in;
//   ${props =>
//     props.open &&
//     css`
//       background: #ff6b6b;
//       &:hover {
//         background: #ff8787;
//       }
//       &:active {
//         background: #fa5252;
//       }
//       transform: translate(-50%, 50%) rotate(45deg);
//     `}
// `;

// const InsertFormPositioner = styled.div`
//   width: 100%;
//   bottom: 0;
//   left: 0;
//   position: absolute;
// `;

// const InsertForm = styled.form`
//   background: #f8f9fa;
//   padding-left: 32px;
//   padding-top: 32px;
//   padding-right: 32px;
//   padding-bottom: 72px;

//   border-bottom-left-radius: 16px;
//   border-bottom-right-radius: 16px;
//   border-top: 1px solid #e9ecef;
// `;

// const Input = styled.input`
//   padding: 12px;
//   border-radius: 4px;
//   border: 1px solid #dee2e6;
//   width: 100%;
//   outline: none;
//   font-size: 18px;
//   box-sizing: border-box;
// `;

// function TodoCreate() {
//   const [open, setOpen] = useState(false);

//   const onToggle = () => setOpen(!open);

//   return (
//     <>
//       {open && (
//         <InsertFormPositioner>
//           <InsertForm>
//             <Input autoFocus placeholder="할 일을 입력 후, Enter 를 누르세요" />
//           </InsertForm>
//         </InsertFormPositioner>
//       )}
//       <CircleButton onClick={onToggle} open={open}>
//         <MdAdd />
//       </CircleButton>
//     </>
//   );
// }

// */
