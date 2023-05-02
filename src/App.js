import React from 'react';
import Sketch from './sketch.js';
import styled from 'styled-components';

function App() {
  return (
    <Main>
      <Header>P5 Experiments</Header>
      <SubHeader>Move your mouse around the canvas!</SubHeader>
      <Canvas>
        <Sketch />
      </Canvas>
    </Main>
  );
}

const Main = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

`;

const Header = styled.h1`
  font-size: 2em;
  text-align: center;
  color: #3F4850;
  font-family: 'Roboto', sans-serif;
`;

const SubHeader = styled.h2`
  font-size: 1em;
  text-align: center;
  color: #3F4850;
  font-family: 'Roboto', sans-serif;
`;

const Canvas = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  border: 3px solid #3F4850;
`;

export default App;
