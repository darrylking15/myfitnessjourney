import React, { Component } from 'react'
import logo from '../logo.jpg'
import workout from '../workout.png'
import styled from 'styled-components'


const Li = styled.ul`
  font-size: 25px; 
  display: flex; 
  margin-left: 500px;
  align-items: center;
  margin-right: 200px;
  font-family: 'Poppins', sans-serif;
` 
 const Img = styled.img`
    width:  300px; 
    height: 275px;
    margin-left: 75px; 
    display: flex; 
    flex-direction: row; 
    position: relative
` 

const Header = styled.header`
    display: flex; 
    flex-direction: row;
    justify-content: space-between

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
    /* margin-top: 80px; */
    


`

const Workout = styled.img`
    width:  300px;
    height: 600px;
    position: absolute;
    margin-left: 69vw; 
    margin-top: 37px;
    

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
            <ul>Login</ul>
        </Li>
</Header>

        
            
        <Body>
        <H4>MyFitnessJourney</H4>
        <Elipse/>
        <Workout alt='workoutpic' src={workout}/>
        
        </Body>
        
        
        
        
        </div>
    )
       
    
}
}