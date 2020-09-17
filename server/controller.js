const bcrypt = require('bcrypt');
const { s3 } = require('aws-sdk');
const { v4: uuidv4 } = require('uuid');




module.exports = {
    login: async (req, res) => {
        const db = req.app.get('db');
        const {username, password} = req.body; 
        const user = await db.check_user(username);
        if(!user[0]){
            return res.status(401).send('Wrong username/password combination. Please try again.'); 
        } else {
            const authenticated = bcrypt.compareSync(password, user[0].password)
            if(authenticated){
                req.session.user = {
                    userId: user[0].user_id, 
                    username: user[0].username
                    
                }
                res.status(200).send(req.session.user)
            } else {
                res.status(401).send('Wrong username/password combination. Please try again.')
            }
        }

    
    
    }, 

    register: async (req, res) => {
        const db = req.app.get('db'); 
        const { username, password,  user_height , user_weight } = req.body; 
        const existingUser = await db.check_user(username); 
        if(existingUser[0]){
            return res.status(409).send('There is someone that has that username! Please register.' );
        }

        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(password, salt); 
        const newUser = await db.register_user([username, hash, user_height , user_weight ])
        req.session.user = {
            userId: newUser[0].user_id, 
            username: newUser[0].username
 }



            res.status(200).send(req.session.user)

    }, 
    logout: (req, res) => {
        req.session.destroy(); 
        res.sendStatus(200); 

    }, 
    getUser: (req, res) => {
        if(req.session.user){
            res.status(200).send(req.session.user)
        } else {
            res.sendStatus(404)
        }
    }
    


    }
    
