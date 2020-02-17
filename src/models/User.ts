import { Role } from "./Role"


export class User{
    username:string
    password:string
    emailAddress:string
    firstName:String
    lastname:string
    role:Role

    constructor(username:string, password:string, emailAddress:string, firstName:String, lastname:string, role:Role){
            
        this.username=username,
        this.password=password,
        this.emailAddress= emailAddress,
        this.firstName= firstName,
        this.lastname= lastname,
        this.role=role
    }
}