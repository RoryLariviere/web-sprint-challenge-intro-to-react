// Write your Character component here
import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
    background-color: #444444;
    border: 3px solid crimson;
    border-radius: 25px;
    font-weight: bolder;
    font-size: 1.5rem;
    color: #FFE81F;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 30vw;
    margin-top: 10px;
    cursor: pointer;
`
const StyledName = styled.p`
    padding-left: 10px;
    padding-right: 10px;
`
const StyledDate = styled.p`
    
    padding-left: 10px;
    padding-right: 10px;
`

export default function Character({info, action}) {
    return (
        <StyledDiv onClick={() => action(info.url)}>
            <StyledName>{info.name}</StyledName>
            <StyledDate>{info.birth_year}</StyledDate>
        </StyledDiv>
    )
}