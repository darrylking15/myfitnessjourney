import React from 'react'
 import styled from 'styled-components';

 const MessageContainer = styled.div`
     background-color: white; 
    height: 20vh;
    width: 10vw; 





// `
const Message = ({message: {user, text}, name}) => {
    let isSentByCurrentUser = false; 
    const trimmedName = name.trim().toLowerCase();

    if(user === trimmedName) {
        isSentByCurrentUser = true; 

    }

    return(
        isSentByCurrentUser
        ? (
            <MessageContainer >
                <p>{trimmedName}</p>
                <div>
                    <p>{text}</p>
                </div>
            </MessageContainer>
        )
        : (
            <div>
                <div>
                    <p>{text}</p>
                </div>
                <p>{user}</p>
            </div>
        )

    )
}
    


export default Message
