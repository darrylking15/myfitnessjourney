import React from 'react'
import onlineIcon from '../onlineIcon.png'
import closeIcon from '../closeIcon.png'
import styled from 'styled-components'


const infoBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #2979FF;
  border-radius: 4px 4px 0 0;
  height: 60px;
  width: 100%;
  




`
const leftInnerInfoBar = styled.div`

    flex: 0.5;
    display: flex;
    align-items: center;
    margin-left: 5%;
    color: white;
    width: 60px; 
    height: 100px; 




`

const rightInnerInfoBar = styled.div`

display: flex;
  flex: 0.5;
  justify-content: flex-end;
  margin-right: 5%;
  float: right; 


`


const Icon = styled.img`

    margin-right: 5%; 
     

`






const InfoBar = ({room}) => (
    
        <infoBar>
         <leftInnerInfoBar>
            <Icon src={onlineIcon} alt='onlineIcon'/>
            <h3>{room}</h3>
        </leftInnerInfoBar>  
        <rightInnerInfoBar>
             <a href='/'><img src={closeIcon} alt='closeImage'/></a>
        </rightInnerInfoBar>  
        </infoBar>
    )




export default InfoBar