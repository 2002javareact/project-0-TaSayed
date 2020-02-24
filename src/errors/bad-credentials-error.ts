import { HttpError } from "./Http-Error";


export class BadCredentialsError extends HttpError{
    constructor(){
        super('Invalid Credentials', 400)
    }
}