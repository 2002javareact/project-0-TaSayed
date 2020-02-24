import * as express from 'express'
import * as bodyparser from 'body-parser'
import { User } from './models/User'
import { userrouter } from './user-router'
import {sessionMiddleware} from "./middleware/session-middleware"
import { HttpError } from './errors/HTTP-Error'
//import {findUserByUsernameAndPassword} from './service/find-user'
import {Users} from './database'

//import {loggingMiddleware} from './middleware/logging-middleware'
//call express func return obj into app
const app = express()

/**
 * CheckList: X = Done, O = TBD,  Y = In Progress
 * Login X - Add db next
 * Find Users Y - Finance manager
 * Make DB
 * Attach DB O ------------
 * Find Users By ID O - Finance Manager
 * Update User O - Admin
 * Find Reimbursements By Status O - Finance Manager
 * Find Reimbursements By User O - Finance Manager
 * Submit Reimbursement O - User
 * Update Reimbursement O - Finance Manager
 */


/**
 * starts on port
 */
app.listen(2002, ()=>{
    console.log('app has started on port 2002');
    
})
/**
 * ------------MIDDLEWARE----------------
 */
app.use(sessionMiddleware)
// app.use(loggingMiddleware)


/** reads the page for us */
app.use("/", bodyparser.json())



/**
 * looks for login and takes 
 * @param username
 * @param password
 * then uses @function findUserByUsernameAndPassword
 * and 
 * @returns user
 */
app.post("/login", async (req, res)=>{
    let {username, password} = req.body
    if(!username && !password){
        res.status(400).send("Please enter username and password")
    }
    try{
        let user:User = await findUserByUsernameAndPassword(username, password)
        req.session.user = user
        res.status(200).json(user)
    }catch(e){
        res.status(e.status)
    }
})

/**
 * 
 */
app.get("/users", (req, res)=>{
    res.json(req.session.user)

})




app.get("/users/:id", (req, res)=>{
    if(req.session.user.role ==='admin'){
        res.send("Hello World")
      //  res.status(200).json(User)
    }
})
 
app.patch("/users", (req, res)=>{
    if(req.session.user.role === 'admin'){
        res.json("admin")
    }
})

app.use("/", (req, res)=>{
    res.send("sending to /")
})


/**
 * @param username 
 * @param password 
 * @returns user
 * @throws HTTPError - 300
 */
function findUserByUsernameAndPassword(username:string, password:string){
    
 try{
    for(let i =0; i <Users.length; i++){
        if(Users[i].username === username && Users[i].password === password){
            return Users[i]
        }
    }
}catch(e){
    throw new HttpError("User not Invalid Credentials", 300)
}}