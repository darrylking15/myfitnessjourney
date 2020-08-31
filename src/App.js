import React from 'react';
import Nav from './Components/Nav'
import styled from 'styled-components'
import routes from './routes'

const BGColor = styled.div`
    background-color: #bdd4e7;
    background-image: linear-gradient(315deg, #bdd4e7 0%, #8693ab 74%);
    width: 100vw;
    height: 100vh;



`


function App() {
  return (
    <BGColor className="App">
   <Nav/>
   {routes} 
    </BGColor>
  );
}

export default App;
