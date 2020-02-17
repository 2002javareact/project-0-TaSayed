import * as express from 'express'
import { Users } from './database'
import * as bodyparser from 'body-parser'
import { User } from './models/User'
import { userRounter } from './userRouter'
//import {loggingMiddleware} from './middleware/logging-middleware'
//call express func return obj into app
const app = express()


app.listen(2002, ()=>{
    console.log('app has started on port 2002');
    
})
app.use("/", bodyparser.json())
//remove?
// app.use(loggingMiddleware)

app.post("/login", (req, res)=>{
    let {username, password} = req.body
    if(username && password){
        if(Users[2].username === username)
                res.json(Users + username)
        else
            res.json("DNE")
        
    }
})


/*
app.post("/newUser", (req, res)=>{
    let {username, password,  emailAddress, id,
        firstName, lastname, role} = req.body
    if(username && password &&  emailAddress && id &&
        firstName && lastname && role){
            Users.push(new User(username, password,  emailAddress, id,
                firstName, lastname, role))
            res.sendStatus(201)
        }else{
            res.status(404).send('include all user fields')
        }
})
*/
app.get("/users/:id", (req, res)=>{
                res.status(200).json(User)
})

app.get("/users", (req, res)=>{
        res.json(Users)
})

app.use("/", (req, res)=>{
    res.send("Hello World")
})

