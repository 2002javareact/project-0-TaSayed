import { User } from "./models/User";
import { Role } from "./models/Role";


export let Users:User[] = [
    new User("ahmed_hash", 'password', 'some_email@gmail.com', 'ahmed', 'singh', new Role(12, 'user')),
    new User("greg_SE", 'nty', 'someotheremail@gmail.com','greg', 'zack', new Role(85, 'admin')),
    new User("avery_user", 'flinstones', 'carwithwheels@gmail.com','fred', 'smith', new Role(23, 'user'))
]