import React, {useState, useEffect} from 'react'; 
import queryString from 'query-string'; 
import io from 'socket.io-client'; 
import styled from 'styled-components'
import InfoBar from './InfoBar'
import ChatInput from './ChatInput'
import Messages from './Messages'

const ChatBody = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #1A1A1D;

  @media (min-width: 320px) and (max-width: 480px) {
   
    height: 100%;
  }
`

const InnerBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: white;
  border-radius: 5px;
  height: 60vh;
  width: 35%;



  @media (min-width: 320px) and (max-width: 480px) {
    width: 100%;
    height: 100%;
  }




  @media (min-width: 480px) and (max-width: 1200px) {
    width: 60%
  }

`








let socket; 





const Chat = ({location}) => {
    
    const [name, setName] = useState(''); 
    const [room, setRoom] = useState(''); 
    const [message, setMessage] = useState([]); 
    const [messages, setMessages] = useState([]); 
    const ENDPOINT = 'http://localhost:5500'; 

    
    
    useEffect(() => {
        const {name, room} = queryString.parse(location.search);

        socket = io(ENDPOINT)
        setName(name); 
        setRoom(room); 
        console.log(socket)

        socket.emit('join', {name, room}, () =>{
            
        });
        return () => {
            socket.emit('disconnect');
            socket.off(); 
        }
    }, [ENDPOINT , location.search])


    useEffect(()=> {
        socket.on('message', (message) => {
            setMessages([...messages, message])
        })

    }, [messages])
    

    const sendMessage = (event) => {
        event.preventDefault();
        
        if(message){
            socket.emit('sendMessage', message, () => setMessage(''))
        }
    }
    console.log(message, messages)
    
    return(
        <ChatBody className='outerContainer'>
            <InnerBody className='container'>
                <InfoBar room={room}/>
                <Messages messages={messages} name={name}/>
                <ChatInput message={message} setMessage={setMessage} sendMessage={sendMessage}/>
            </InnerBody>
        </ChatBody>)
}

export default  Chat