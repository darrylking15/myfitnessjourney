import React, { Component } from 'react'
import workout from '../workout.png'
import styled from 'styled-components'
import phone from '../phonebrands.png'






const H4 = styled.h4`
    font-size: 83px; 
    font-family: 'Poppins';
    margin-left: 30px;
    font-weight: 0; 
    margin-top: 250px; 



`
const Elipse = styled.div`
    width: 555px;
    height: 550px;
    border-radius: 50%;
    background: linear-gradient(180deg, #2A649A 0%, #FFFFFF 100%);
    margin-top: 200px; 


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
    margin-top: 99px;
    
` 
const TextContainer = styled.h1`
    font-family: Poppins;
    font-style: normal;
    font-weight: 600;
    font-size: 37px;
    position: absolute;
    margin-top: 400px; 
    margin-left: 100px; 

    

`

const Phones = styled.img`
     
    width: 600px; 
    height: 80px; 
    position: absolute; 
    margin-top: 450px; 
    margin-left: 120px; 


`

export default class Home extends Component  {



render(){
    return(
        

        
            
        <Body>
        <H4>MyFitnessJourney</H4>
        <Elipse/>
        <Workout alt='workoutpic' src={workout}/>
        <TextContainer>Where Trainer and Trainee Meet!</TextContainer>
        <Phones src={phone} alt='phone'/>
        </Body>
        
        
        
        
        
        
       
    )
       
    
}
}