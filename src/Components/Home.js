import React, { Component } from 'react'
import workout from '../workout.png'
import styled from 'styled-components'
import phone from '../phonebrands.png'






const H4 = styled.h4`
    font-size: 83px; 
    font-family: 'Poppins';
    margin-left: 180px;
    font-weight: 0; 
    /* padding-left: 30px; */
    margin-top: 270px; 
    letter-spacing: 4px; 
    color: #F5F7F7; 
    font-family: 'Jacques Francois Shadow';
    z-index: 3;



`
const HomeContainer = styled.div`
    display: flex; 
    background-color: #79031D;
    width: 100vw; 
    height: 100vh; 
    z-index: 0;
    


`

const Body = styled.div`
    display: flex; 
    flex-wrap: wrap; 
    flex-direction: row;
    background-color: #79031D;
    z-index: -1;
    
    


`

const Workout = styled.img`
    width:  330px;
    height: 600px;
    position: absolute;
    margin-left: 1110px; 
    margin-top: -240px;
    padding-right: 90px; 
    z-index: 1;
    background-color: #79031D;
    
    
    
` 
const TextContainer = styled.h1`
    font-family: Poppins;
    font-style: normal;
    font-weight: 600;
    font-size: 37px;
    position: absolute;
    margin-top: 50px; 
    margin-left: 300px; 
    color: #EDB518;
    z-index: 2;
    

    

`

const Phones = styled.img`
     
    width: 600px; 
    height: 80px; 
    position: absolute; 
    margin-top: 150px; 
    margin-left: 325px; 


`

export default class Home extends Component  {



render(){
    return(
        

        
            
        <Body>
        <H4>My Fitness Journey</H4>
        <HomeContainer>
        {/* <Elipse/> */}
        <Workout alt='workoutpic' src={workout}/>
        <TextContainer>Where Trainer and Trainee Meet!</TextContainer>
        <Phones src={phone} alt='phone'/>
        </HomeContainer>
        </Body>
        
        
        
        
        
        
       
    )
       
    
}
}