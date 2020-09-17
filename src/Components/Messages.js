import React from 'react'
import ScrollToBottom from 'react-scroll-to-bottom'; 

import Message from './Message'

 const Messages = ({messages, name}) => (
      <ScrollToBottom>
           {messages.map((message, i) => <div key={i}><Message message={messages} name={name} /></div>)}
       </ScrollToBottom>
      )



export default Messages