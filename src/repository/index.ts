import {Pool} from 'pg'
import { userrouter } from '../user-router'

export const connectionPool:Pool = new Pool({
    host:process.env['proj0db1'],
    user:process.env['proj0db'],
    password: process.env['proj0db'],
    database: process.env['proj0dbtype'],
    port:5432,
    max:5
})

console.log(connectionPool);
