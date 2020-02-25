import * as express from 'express'
import * as bodyparser from 'body-parser'
import { User } from './models/User'
import { userrouter } from './routers/user-router'
import {sessionMiddleware} from "./middleware/session-middleware"
import { HttpError } from './errors/HTTP-Error'
//import {findUserByUsernameAndPassword} from './service/find-user'
import {Users} from './database'
import { findUserByUsernameAndPassword } from './service/find-user'

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

//routers
app.use(userrouter)


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
        //let user:User = Users[2]
        req.session.user = await user
        res.status(200).json(await user)
    }catch(e){
        res.status(e.status)
    }
})

app.get("/users/:id", (req, res)=>{
    res.send(req.params.id)
})