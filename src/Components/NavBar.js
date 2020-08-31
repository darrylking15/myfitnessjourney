import React from 'react'; 
import {Link} from 'react-router-dom'; 
import styled from 'styled-components'; 

import Burger from './Burger'; 

const Nav = styled.nav`
    width: 100%; 
    height: 55px; 
    /* border-bottom: 2px solid #f1f1f1;  */
    display: flex;
    justify-content: space-between; 
    background-color: #182628;
    
    
   


  
   
   

`
const Logo = styled.div`
    padding-top:  15px;
    padding-left: 30px; 
    font-size: 18px;
    
    
    

   


`


const NavBar = () => {
    return (
        <Nav>
            <Logo>
           <Link style={{ textDecoration: 'none', color: 'black' }} className="fas fa-dumbbell" to='/'>MFJ<i className="fas fa-dumbbell"></i></Link>
           </Logo>
           <Burger/>
           
        </Nav>
    )
}











/* <Li className='nav_list' >
<ul><Link to='/'>Home</Link></ul>
<ul><Link to='/auth/chat'>Chat</Link></ul>
<ul><Link to='/auth/support'>Support</Link></ul>
<LoginButton><Link to='/auth/login'>Login</Link></LoginButton> */









export default NavBar
