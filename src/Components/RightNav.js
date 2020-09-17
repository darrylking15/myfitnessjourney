import React from 'react'; 
import {Link} from 'react-router-dom'
import styled from 'styled-components'

 

const Ul = styled.ul`
    
    display: flex; 
    flex-flow: row nowrap;
    list-style: none;
    text-decoration:none; 
    color: #EDB518;
   
    


li{
    padding: 18px 10px;
    text-decoration:none;
    /* background-color:#EDB518; */
    color: #EDB518;  
    
}
@media (max-width: 768px){
    
    flex-flow: column nowrap; 
    background-color: #EDB518;
    position: fixed;
    transform: ${({open}) => open ? 'translate(100%)' : 'translateX(0)'} ;
    top: 0 ; 
    right: 0; 
    height: 100vh; 
    width: 300px; 
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    text-decoration:none; 
    

}

    li{
        color: #EDB518; 
    }


`





 const RightNav = ({open}) => {
    return(
        <Ul open={open}>
        <li><Link style={{ textDecoration: 'none', color: '#EDB518' }} to='/'>Home</Link></li>
        <li><Link style={{ textDecoration: 'none', color: '#EDB518' }} to='/auth/join'>Join Chat</Link></li>
        <li><Link style={{ textDecoration: 'none', color: '#EDB518' }} to='/auth/support'>Support</Link></li>
        <li><Link style={{ textDecoration: 'none', color: '#EDB518' }} to='/auth/login'>Login</Link></li>
        </Ul>
    )
}


export default RightNav