import * as express from 'express'
import { authFactory, authCheckId } from '../middleware/auth-middleware'
import { findUserByUserID } from '../service/find-user';
import { User } from '../models/User';
import { sessionMiddleware } from '../middleware/session-middleware';
import * as bodyparser from 'body-parser'
import { Role } from '../models/Role';
import { addUser } from '../service/add-user';
import { Reimbursement } from '../models/reimbursement';
import { findReimburseByStatus } from '../service/find-reimburse';

//all app.get to userRouter use ctrl d to go  through the changes.

// starts router
export const reimburseRouter = express.Router()
reimburseRouter.use("/", bodyparser.json())
reimburseRouter.use(sessionMiddleware)

let epoch = new Date('1970-01-01')

let adminAuth:string[] = ["admin"];
let financeAuth:string[] = ["admin", "finance_manager"];
let allAuth:string[] = ["admin", "finance_manager", "user"];


reimburseRouter.get('/reimburse/status/:status', authFactory(financeAuth), authCheckId, async (req,res)=>{ 
        try{
            
            let statusId = +req.params.status; 
            
            
            
            if( statusId && isNaN(statusId)){
                res.status(400).send("Please enter status value")
            }
            
            let reimburse:Reimbursement[] = await findReimburseByStatus(statusId)
            
            res.status(200).json(await reimburse)
            
            
    }catch(e){
        res.status(e.status)
    }
})

// let {reimbursementId,
//     author,
//     amount,
//     dateSubmitted,
//     dateResolved,
//     description,
//     resolver,
//     type} = req.body
//     if(reimbursementId&&author&&amount&&dateSubmitted&&dateResolved&& description&& resolver&& type)