import { Role } from "../models/Role";
import { User } from "../models/User";
import { UserDTO } from "../dto/user-dto";

export function userDTOToUserConverter(userDTO:UserDTO):User{
    let ret = new User(
        userDTO.username,
        userDTO.password,
        userDTO.email,
        userDTO.user_id,
        userDTO.first_name,
        userDTO.last_name,
        new Role(
            userDTO.role_id,
            userDTO.role_name
        )
    )
    return ret
   
    
}