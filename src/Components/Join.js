import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';


const joinOuterContainer = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  height: 100vh;
  align-items: center;
  background-color: #1A1A1D;

`


const Join = () => {
    
    const [name, setName] = useState(''); 
    const [room, setRoom] = useState(''); 

    
    
    
    
    return(
        <div className='joinOuterContainer'>
            <div className='joinInnerContainer'>
            <h1 className='heading'>Join</h1>
               
               <div><input placeholder='Name' className='joinInput' type='text' onChange={(e) => setName(e.target.value)}/></div> 
               <div><input placeholder='Room' className='joinInput mt-20' type='text' onChange={(e) => setRoom(e.target.value)}/></div> 
               <Link  onClick={e => !name || !room ? e.preventDefault() : null} to={`/auth/chat?name=${name}&room=${room}`}>
                <button className= 'button mt-20' type='submit' >Chat Now</button>
               </Link>
                
            </div>
        </div>
    )
}


export default Join