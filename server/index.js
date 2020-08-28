require('dotenv').config();
const express = require('express'); 
const {SERVER_PORT, SESSION_SECRET,  CONNECTION_STRING} = process.env; 
const massive = require('massive'); 
const session = require('express-session')
const app = express(); 
const ctrl = require('./controller')



app.use(express.json()); 
app.use(session({
    resave: false, 
    saveUninitialized: true,
    cookie: {
        maxAge: 1000 * 60 * 60 * 48 
    }, 
    secret: SESSION_SECRET

}))

massive({
    connectionString: CONNECTION_STRING,
    ssl: {
        rejectUnauthorized : false
    }
}).then(db => {
    app.set('db', db)
    console.log('Server Is Now Connected To The DataBase.')
}).catch(err => console.log(err))

app.post('/auth/login', ctrl.login)
app.post('/auth/register', ctrl.register)
app.get('/auth/logout', ctrl.logout)
app.get('/auth/user',  ctrl.getUser)

app.listen(SERVER_PORT, () => console.log('Server Connected On Port ' + SERVER_PORT))