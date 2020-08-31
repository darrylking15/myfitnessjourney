import React from "react";
import NavBar from "./Components/NavBar";
import styled from "styled-components";
import routes from "./routes";
import './reset.css'

const BGColor = styled.div`
   background-color: black; 
  background-image: black;
  width: 100vw;
  height: 100vh;
 
 
 html {
    width: 100%;
    margin: 0px;
    padding: 0px;
    overflow: hidden;
 }

 body{
  width: 100%;
    margin: 0px;
    padding: 0px;
    overflow: hidden;
 }


`;

function App() {
  return (
    <BGColor className="App">
      <NavBar/>
      {routes}
    </BGColor>
  );
}

export default App;
