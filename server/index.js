require('dotenv').config();

const express = require('express'); 
const {SERVER_PORT, SESSION_SECRET,  CONNECTION_STRING} = process.env; 
const massive = require('massive'); 
const session = require('express-session')
const ctrl = require('./controller')
const mutler = require('multer')
const AWS = require('aws-sdk')
const { v4: uuidv4 } = require('uuid');
const socketio = require('socket.io'); 
const http = require('http');
const cors = require('cors');
const {addUser, removeUser, getChatUser, getUserInRoom} = require('./users')

const router = require('./router');






const app = express();


const server = app.listen(SERVER_PORT, () => console.log('Server Connected On Port ' + SERVER_PORT)) 
const io = socketio(server);

app.use(router);




io.on('connection', (socket) => {
    console.log('We have a new connection.!!!')
    socket.on('join', ({name, room }, cb) => {
        console.log(name, room); 
        const {error , user} = addUser({id: socket.id, name , room }); 
      
        if(error) return cb(error)

        socket.emit('message', {user: 'admin', text: `${user.name}, welcome to the room {user.room}`}); 
        socket.broadcast.to(user.room).emit('message', {user: 'admin', text: `${user.name}, has joined!`}  )

        socket.join(user.room)
        cb();  
        
    })


    socket.on('sendMessage', (message, cb)=> {
        const user = getChatUser(socket.id)

        io.to(user.room).emit('message', {user: user.name, text: message})
        cb(); 
    })
    socket.on('disconnect', () => {
        
        const user = removeUser(socket.id)

        if(user){
            io.to(user.room).emit('message', {user: 'admin', text: `${user.name} has left!`})
        }
    })
})

const s3 = new AWS.S3({
    accessKeyId: process.env.ACCESS_KEY_ID, 
    secretAccessKey: process.env.SECRET_ACCESS_KEY
})

const storage = mutler.memoryStorage({
    destination: function(req, file, callback){
        callback(null, '')
    }
})

const upload = mutler({storage}).single('image')



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
app.post('/upload', upload, (req, res) =>{
        let myFile = req.file.originalname.split('.')
        const fileType = myFile[myFile.length - 1]
        const params = {
            Bucket: process.env.BUCKET_NAME, 
            Key: `${uuidv4()}.${fileType}`,
            Body: req.file.buffer
        }

        s3.upload(params, (err, data)=>{
            if(err){
                res.status(500).send(err)
            }
            res.status(200).send(data)
            console.log(data.Location)
            const db = req.app.get('db'); 
            const {user_pic} = req.body;
            const {user_id } = req.session.user; 
            console.log()
            const newPic = db.add_pic([data.Location, user_id])

        })
    }
)





