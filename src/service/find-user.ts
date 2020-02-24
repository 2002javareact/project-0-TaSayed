import { daoFindUserByUsernameAndPassword } from "../repository/dao-find-user";
import { User } from "../models/User";


export async function findUserByUsernameAndPassword(username:string, password:string):Promise<User>{
    return await daoFindUserByUsernameAndPassword(username, password)
}

