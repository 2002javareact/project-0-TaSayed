import * as express from 'express'
export const userrouter = express.Router()

//all app.get to userRouter use ctrl d to go  through the changes.

/**
 * 
 */
const app = express()

app.get("/users/:id", (req, res)=>{
    console.log(req.originalUrl)
})


app.get("/users", (req, res)=>{
    if(req.session.user.role){
        if(req.session.user.role.roleId<=2){
            res.send(req.session.user)
        //  res.status(200).json(User)
        }else{
            res.status(400).send("Invalid Credentials")
        }
    }else{
        res.send("Invalid Credentials")
    }
})