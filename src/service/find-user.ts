import { daoFindUserByUsernameAndPassword, daoFindUserByUserID } from "../repository/dao-user-interaction";
import { User } from "../models/User";


export async function findUserByUsernameAndPassword(username:string, password:string):Promise<User>{
    return await daoFindUserByUsernameAndPassword(username, password)
}

export async function findUserByUserID(userid:number):Promise<User>{    
    return await daoFindUserByUserID(userid)
}
