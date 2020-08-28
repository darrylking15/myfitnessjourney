import React, { Component } from 'react'

export default class Login extends Component {
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
        return (
            <div>
                
                
            </div>
        )
    }
}
