'use client'

import Image from 'next/image'
import styles from './page.module.css'
import Title from '@/components/Title'
import styled from "styled-components";
import { useMutation, useQuery } from '@tanstack/react-query';
import { stt } from '@/api/stt';
import { useCallback } from 'react';


export default function Home() {
  const query = useMutation(
    ['stt'],
    (data:any) => stt(data)
  )

  const data = ''
  const PostStt = useCallback(
    async () => {
      query.mutate(data, {})
    },[query])


  return (

    <H1>
      무엇을
      <br/>
      예약해드릴까요?
    </H1>

  )
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