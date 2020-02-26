import { PoolClient, Pool } from "pg";
import { connectionPool } from "./index";
import { Reimbursement } from "../models/reimbursement";
import { ReimbursementTypes } from "../models/reimbursement-type";
import { ReimbursementStatus } from "../models/reimbusement-status";
import { userDTOToUserConverter, reimburseDTOToReimburseConverter } from "../util/converter";
import {BadCredentialsError} from '../errors/bad-credentials-error';
import {InternalServerError} from '../errors/internal-server';
import {UserNotFoundError} from '../errors/user-not-found';



export async function daoFindReimburseByStatus(statusId:number):Promise<Reimbursement[]>{
    let client:any;
    let i:Reimbursement
 
    try {
        client = await connectionPool.connect()
        let results = await client.query('SELECT * FROM Proj0.reimbursement R  inner join Proj0.reimbursementStatus S on S.status_id = R.status inner join Proj0.reimbursementType T on R."type" = T.type_id where s.status_id = $1 order by R.datesubmitted;', [statusId])
        if(results.rowCount === 0){
            throw new Error('Reimbursement Not Found')
        }
        let ret:Reimbursement[] = [];
        for(let i =0; i<results.rowCount; i++ ){
            ret.push(reimburseDTOToReimburseConverter(results.rows[i]))
            console.log(results.rows[i].datesubmitted);
            console.log(typeof(results.rows[i].datesubmitted));
            

        }
        console.log(results.rows);
        
        
        return ret
    } catch(e){       
        
        console.log(e);
        if(e.message === 'Reimbursement Not Found'){
            throw new BadCredentialsError()
        }else {
            throw new InternalServerError()
        }
    } finally {
        client && client.release()
    }
}