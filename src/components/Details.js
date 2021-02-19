import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const StyledDetailsDiv = styled.div`
    background-color: #444444;
    color: #FFE81F;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: start;
    border: 3px solid crimson;
    border-radius: 25px;
    width: 26vw;
    margin-bottom: 20px;
`
const StyledDataP = styled.p`
    padding-left: 10px;
`
const StyledH2 = styled.h2`
    padding-left: 10px;
`
const ButtonDiv = styled.div`
    background-color: #444444;
    width: 100%;
    padding-top: 10px;
    padding-bottom: 10px;
    border-radius: 25px;
`
const StyledButton = styled.button`
    background-color: navy;
    border: 3px solid crimson;
    border-radius: 25px;
    width: 10vw;
    height: 8vh;
    font-size: 1rem;
    font-weight: bolder;
    color: #FFE81F;

    &:hover {
        transition: all 0.5s ease-in-out;
        background-color: royalblue;
    }
    transition: all 0.5s ease-in-out;
`

export default function Details(props) {
    const { charUrl, close } = props;
    const [infoData, setInfoData] = useState(null);

    useEffect(() => {
        axios.get(charUrl)
            .then(res=>{
                setInfoData(res.data);
            })
            .catch(err=>{
                console.log(err)
            })
    }, [charUrl])

    return (
        <StyledDetailsDiv className='charInfo-container'>
            <StyledH2>Details:</StyledH2>
            {
                infoData &&
                <>
                    <StyledDataP>Name: {infoData.name}</StyledDataP>
                    <StyledDataP>Gender: {infoData.gender}</StyledDataP>
                    <StyledDataP>Height: {infoData.height}</StyledDataP>
                    <StyledDataP>Eye color: {infoData.eye_color}</StyledDataP>
                    <StyledDataP>Hair color: {infoData.hair_color}</StyledDataP>
                    <StyledDataP>Mass: {infoData.mass}</StyledDataP>
                </>
            }
            <ButtonDiv>
                <StyledButton onClick={close}>Close</StyledButton>
            </ButtonDiv>
        </StyledDetailsDiv>
    )
}