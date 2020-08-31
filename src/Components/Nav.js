import React from 'react'
import logo from '../logo.png'
import {Link} from 'react-router-dom'
import styled from 'styled-components'



const Header = styled.header`
    display: flex; 
    flex-direction: row;
    justify-content: space-between;
    align-content: center; 
    background-color: #3777B2;
    width: 100vw; 
    height: 10vh; 
    position: absolute; 
    


`

const LoginButton = styled.div`
    border: 3px solid  #FFFFFF;
    box-sizing: border-box;
    margin-left: 15px;
    padding: 8px;
    border-radius: 10%; 



`

const Img = styled.img`
width:  140px; 
height: 100px;
margin-left: 110px; 
flex-direction: row; 
position: relative; 
margin-top: -5; 

` 
const Li = styled.ul`
  font-size: 25px; 
  display: flex; 
  margin-left: 875px;
  align-items: center;
  margin-top: -100px; 
  text-decoration: none; 
  font-family: 'Poppins', Impact, Haettenschweiler, 'Arial Narrow Bold'
  
` 


export default function Nav() {
    return (
        
<Header className='nav_container'>
    <header className='nav_header'>
            <Img className='nav_img'   alt='logo' src={logo}/> 
            <Li className='nav_list' >
                <ul><Link to='/'>Home</Link></ul>
                <ul><Link to='/auth/chat'>Chat</Link></ul>
                <ul><Link to='/auth/support'>Support</Link></ul>
                <LoginButton><Link to='/auth/login'>Login</Link></LoginButton>
               
                
            </Li>
    </header>
 </Header>
    )
}



