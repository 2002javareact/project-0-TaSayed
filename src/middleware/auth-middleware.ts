export const authMiddleware=(req, res, next)=>{
    if(!req.session.user){
        res.status(401).send('Please Login')
    }else if(req.session.user.role.role === 'Admin'){
        next()
    } else {
        res.status(403).send('You are UnAuthorized for this endpoint')
    }
    
}


export const authCheckId= (req,res,next) => {
    // Allow through automatically, people that aren't users

    if(req.session.user.id === +req.params.id ){
        next()
    } else {
        res.status(403).send('You are UnAuthorized for this endpoint')
    }
}