import {Request, Response} from 'express'
import {NextFunction} from 'express'
let i:NextFunction
export function loggingMiddleware(req:Request, res:Response){
    console.log(`Request URL is ${req.url} and Response is ${res}`)
}