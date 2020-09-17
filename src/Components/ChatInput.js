import React from 'react'

const ChatInput = ({message, setMessage, sendMessage}) => {
    return (
        <form>
              <input 
                type= 'text'
                placeholder='Type your message here...'
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyPress={e => e.key === 'Enter' ? sendMessage(e) : null}>
                </input> 
                <button onClick={(e)=> sendMessage(e)}>Send</button>
        </form>
    )
}


export default ChatInput