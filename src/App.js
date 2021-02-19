import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import Character from './components/Character';
import Details from './components/Details';
import styled from 'styled-components';


const StyledApp = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const StyledH1 = styled.h1`
  font-weight: bolder;
  font-size: 2.5rem;
  color: #FFE81F;
  text-shadow: 2px 2px black;
  background-color: #444444;
  border-top: 3px solid red;
  border-bottom: 3px solid red;
  border-left: 3px solid #FFE81F;
  border-right: 3px solid #FFE81F;
  padding: 20px;
  border-radius: 25px 0px 25px 0px;
`
const StyledFooter = styled.footer`
  width: 100%;
  height: 20vh;
  background-color: #444444;
  color: #E0E0E0;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  box-shadow: inset 0 0 10px #000000;
`
const StyledCopyright = styled.p`
  padding: 10px;
  font-size: 0.7rem;
`

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [characterData, setCharacterData] = useState([]);
  const [currentCharUrl, setCurrentCharUrl] = useState(null);
  console.log(characterData);

  const openDetails = url => {
    setCurrentCharUrl(url);
  }

  const closeDetails = () => {
    setCurrentCharUrl(null);
  }

  useEffect(()=>{
    axios.get('https://swapi.dev/api/people/')
      .then(res=>{
        setCharacterData(res.data);
      })
      .catch(err=>{
        console.log(err);
      });
  }, []);

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <StyledApp className="App">
      <StyledH1 className="Header">Characters</StyledH1>
      {
        characterData.map(char=>{
          return <Character key={char.url} info={char} action={openDetails} />
          
        })
      }
      {
        currentCharUrl && <Details charUrl={currentCharUrl} close={closeDetails} />
      }
      
      <StyledFooter>
        <StyledCopyright>Created by Rory Lariviere</StyledCopyright>
      </StyledFooter>
      
    </StyledApp>
  );
}

export default App;
