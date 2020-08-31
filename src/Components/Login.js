import React, { Component } from 'react'
import {connect} from 'react-redux'; 
import {loginUser} from '../redux/reducer'; 
import styled from 'styled-components'





const LoginPage = styled.div` 
  width: 100%;  
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px;
  background: #f2f2f2;  
`

const LoginContainer = styled.div`
  width: 400px;
  height: 600px; 
  background: #fff;
  border-radius: 10px;
  overflow: hidden;
  padding: 77px 55px 33px 55px;
  box-shadow: 0 5px 10px 0px rgba(0, 0, 0, 0.1);
  font-family: 'Poppins', Impact, Haettenschweiler, 'Arial Narrow Bold';
  display: flex; 
  flex-direction: column

`

const Input1 = styled.input`
    font-family: Poppins-Regular;
    font-size: 15px;
    line-height: 1.2;
    display: block;
    width: 100%;
    height: 45px;
    padding: 0 5px;
    margin-top: 200px; 
    align-content: center
    
`
const Input2 = styled.input`
    font-family: Poppins-Regular;
    font-size: 15px;
    line-height: 1.2;
    display: block;
    width: 100%;
    height: 45px;
    padding: 0 5px;
   
    
`



const H1 = styled.h1`
    position: absolute;
    margin-top: -300px; 



`
const Button = styled.button`

    width: 220px;
    height: 50px;
    border: none;
    outline: none;
    color: #fff;
    background: #111;
    cursor: pointer;
    position: relative;
    z-index: 0;
    border-radius: 10px;


:before 
    content: '';
    background: linear-gradient(45deg, #ff0000, #ff7300, #fffb00, #48ff00, #00ffd5, #002bff, #7a00ff, #ff00c8, #ff0000);
    position: absolute;
    top: -2px;
    left:-2px;
    background-size: 400%;
    z-index: -1;
    filter: blur(5px);
    width: calc(100% + 4px);
    height: calc(100% + 4px);
    animation: glowing 20s linear infinite;
    opacity: 0;
    transition: opacity .3s ease-in-out;
    border-radius: 10px;


.glow-on-hover:active {
    color: #000
}

.glow-on-hover:active:after {
    background: transparent;
}

.glow-on-hover:hover:before {
    opacity: 1;
}

.glow-on-hover:after {
    z-index: -1;
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: #111;
    left: 0;
    top: 0;
    border-radius: 10px;
}

@keyframes glowing {
    0% { background-position: 0 0; }
    50% { background-position: 400% 0; }
    100% { background-position: 0 0; }
}



Resources

`


 class Login extends Component {
    constructor(){
        super()
        this.state = {
            username: '', 
            password: '', 
            user_height: '' ,
            user_weight: '', 
            newUser: false
        }
    }
    
    
    toggle= () => {
        this.setState({
            newUser: !this.state.newUser
        })
    }
    
    render() {
        const {username, password} = this.state
        return (
            <LoginPage>
            <H1>Welcome</H1>
                {!this.state.newUser ?
                
                
                <LoginContainer>
                <Input1 name='username' type='text' value={username} placeholder='Username'/>
                
                <Input2 name='Password' type='password' value={password} placeholder='Password'/>
                
                
                <div>

                    <Button>Login</Button>
                    <Button>Register</Button>
                </div>
                </LoginContainer>
                :
                <LoginContainer>
                
                <Input1 name='username' type='text' value={username} placeholder='Username'/>
                <Input2 name='password' type='password' value={password} placeholder='Password'/>
                
                
                
                <div>

                    <Button>Sign Up</Button>
                    <Button>Already Registered?</Button>
                </div>
                </LoginContainer>
            }
            </LoginPage>
        )
    }
}


const mapStateToProps = state => state

export default connect(mapStateToProps,  {loginUser})(Login)
