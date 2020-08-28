import React, { Component } from 'react'

import ReactS3 from 'react-s3';
require('dotenv').config(); 
const { bucketName,dirName,region, accessKeyId, secretAccessKey} = process.env






const config = {
    bucketName: bucketName,
    dirName: dirName, /* optional */
    region: region,
    accessKeyId: accessKeyId,
    secretAccessKey: secretAccessKey
}


 class Login extends Component {
    constructor(){
        super()
        this.state = {
          
        }
    }
    
    
    upload(e){
        console.log(e.target.files[0])
        reactS3.upload(e.target.files[0], config)
        .then((data) => {

        })
        .catch((err)=>{
            console.log(err)
        })
    }
    
    
    render(){
        return(
            <div>
                <h3>aws s3 upload</h3>
                <input type='file' onChange={this.upload}></input>
            </div>
        )
    }



   
 }


export default Login