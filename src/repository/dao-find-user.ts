import { PoolClient } from "pg";
import { connectionPool } from ".";
import { User } from "../models/User";
import { Role } from "../models/Role";

export async function daoFindUserByUsernameAndPassword(username:string, password:string):Promise<User>{
    let client:PoolClient
    try{
        client= await connectionPool.connect()
        let results = await client.query(`SELECT * FROM public.users WHERE username = '${username}' and "password" = '${password}'`)
        return new User(
            results.rows[0].username,
            results.rows[0].password,
            results.rows[0].user_id,
            results.rows[0].first_name,
            results.rows[0].last_name,
            new Role(
                results.rows[0].role_name,
                results.rows[0].roleID
                )

        ) //TODO
    }catch (e) {
        return null
    }
    
}


//  try{
//         for(let i =0; i <Users.length; i++){
//             if(Users[i].username === username && Users[i].password === password){
//                 return Users[i]
//             }
//         }
//     }catch(e){
//         throw new HttpError("User not Invalid Credentials", 300)
//     }
