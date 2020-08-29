import React, { Component } from 'react'
import logo from '../logo.png'
import workout from '../workout.png'
import styled from 'styled-components'
import phone from '../phonebrands.png'


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
    /* justify-content: space-between; */
    align-content: center;
    background-color: #3777B2;
    width: 100vw; 
    height: 10vh; 


`

const H4 = styled.h4`
    font-size: 83px; 
    font-family: 'Poppins';
    margin-left: 30px;
    font-weight: 0; 
    


`
const Elipse = styled.div`
    width: 555px;
    height: 550px;
    border-radius: 50%;
    background: linear-gradient(180deg, #2A649A 0%, #FFFFFF 100%);
    margin-top: 80px; 

`

const Body = styled.div`
    display: flex; 
    flex-wrap: wrap; 
    flex-direction: row;
    
    


`

const Workout = styled.img`
    width:  300px;
    height: 600px;
    position: absolute;
    margin-left: 69vw; 
    margin-top: 15px;
    

`
const LoginButton = styled.div`
border: 3px solid  #FFFFFF;
box-sizing: border-box;
padding-right: 45px;
margin-left: 15px;


`




    
    

const TextContainer = styled.h1`
    font-family: Poppins;
    font-style: normal;
    font-weight: 600;
    font-size: 37px;
    position: absolute;
    margin-top: 300px; 
    margin-left: 70px; 

    

`

const Phones = styled.img`
     
    width: 600px; 
    height: 80px; 
    position: absolute; 
    margin-top: 450px; 
    margin-left: 135px; 


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
        <Phones src={phone} alt='phone'/>
        </Body>
        
        
        
        
        
        
        </div>
    )
       
    
}
}