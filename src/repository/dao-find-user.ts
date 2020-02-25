import { PoolClient, Pool } from "pg";
import { connectionPool } from "./index";
import { User } from "../models/User";
import { Role } from "../models/Role";
import { userDTOToUserConverter } from "../util/user-dto-to-user-converter";
import {BadCredentialsError} from '../errors/bad-credentials-error';
import {InternalServerError} from '../errors/internal-server';
import {UserNotFoundError} from '../errors/user-not-found';

export async function daoFindUserByUsernameAndPassword(username:string, password:string):Promise<User>{
    let client:any;
 
    try {
        client = await connectionPool.connect()
        // a paramaterized query
        let results = await client.query('SELECT * FROM Proj0.users U inner join Proj0.roles R on U."role" = R.role_id  WHERE U.username = $1  and U."password" = $2', [username,password])
        if(results.rowCount === 0){
            throw new Error('User Not Found')
        }
        return userDTOToUserConverter(results.rows[0])
    } catch(e){       
        
        console.log(e);
        if(e.message === 'User Not Found'){
            throw new BadCredentialsError()
        }else {
            throw new InternalServerError()
        }
    } finally {
        client && client.release()
    }
}
