import React, { Component } from 'react'
import logo from '../logo.png'
import workout from '../workout.png'
import styled from 'styled-components'
import apple from '../apple.svg'


const Li = styled.ul`
  font-size: 25px; 
  display: flex; 
  margin-left: 500px;
  align-items: center;
  margin-right: 200px;
  font-family: 'Poppins', Impact, Haettenschweiler, 'Arial Narrow Bold'
  
` 
 const Img = styled.img`
    width:  120px; 
    height: 90px;
    margin-left: 200px; 
    display: flex; 
    flex-direction: row; 
    position: relative

` 

const Header = styled.header`
    display: flex; 
    flex-direction: row;
    justify-content: space-around;
    background-color: #3777B2;
    width: 100vw; 
    height: 10vh; 


`

const H4 = styled.h4`
    font-size: 85px; 
    font-family: 'Poppins';
    margin-left: 50px;
    font-weight: 0; 
    


`
const Elipse = styled.div`
    width: 550px;
    height: 550px;
    border-radius: 50%;
    background: linear-gradient(180deg, #2A649A 0%, #FFFFFF 100%);
    margin-top: 100px; 

`

const Body = styled.div`
    display: flex; 
    flex-wrap: wrap; 
    flex-direction: row;
    margin-top: 80px;
    


`

const Workout = styled.img`
    width:  300px;
    height: 600px;
    position: absolute;
    margin-left: 71vw; 
    margin-top: 37px;
    

`
const LoginButton = styled.div`
border: 3px solid  #FFFFFF;
box-sizing: border-box;
padding-right: 45px;
margin-left: 15px;


`

const AppleContainer = styled.div`
    background-color: #2A649A;
    width: 244px; 
    height: 60px;
    margin-left: 300px;  
    position: absolute;
    margin-top: 450px;
    /* Vector */



    
    

`
const TextContainer = styled.h1`
    font-family: Poppins;
    font-style: normal;
    font-weight: 600;
    font-size: 40px;
    position: absolute;
    margin-top: 300px; 
    margin-left: 70px; 

    

`

const Apple = styled.img`
    background-color: white; 
    width: 20px; 
    height: 30px

`

export default class Home extends Component  {



render(){
    return(
        <div>
 <Header>
         <Img  alt='logo' src={logo}/> 
        <Li >
            <ul>Home</ul>
            <ul>Chat</ul>
            <ul>Support</ul>
            <LoginButton>
            <ul>Login</ul>
            </LoginButton>
            
        </Li>
</Header>

        
            
        <Body>
        <H4>MyFitnessJourney</H4>
        <Elipse/>
        <Workout alt='workoutpic' src={workout}/>
        <TextContainer>Connect with Trainers with one click!</TextContainer>
        <AppleContainer>
        <Apple src={apple} alt='applelogo'/>
        </AppleContainer>

        </Body>
        
        
        
        
        
        
        </div>
    )
       
    
}
}