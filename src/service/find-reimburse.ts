import { daoFindReimburseByStatus } from "../repository/dao-reimburse-interaction";
import { Reimbursement } from "../models/reimbursement";


export async function findReimburseByStatus(statusId:number):Promise<Reimbursement[]>{
    return await daoFindReimburseByStatus(statusId)
}
