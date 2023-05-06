import {Request,Response,NextFunction} from 'express';
import * as jws from 'jsonwebtoken';

const JWTSECRET = process.env.JWT_SCRT || "";

const VerifyUser = function(req :Request ,res : Response,next : NextFunction){
    if(req.body.notename && req.body.descp && req.headers.authorization){
        const token = req.headers.authorization?.split(' ').pop() || "";
        jws.verify(token,JWTSECRET, (err,decode) => {
            if (err){
                res.status(401).send("TOKEN IS INVALID")
            }else{
                next()
            }
        })
    }else{
        res.status(401).send("LOGIN YOUR ACCOUNT")
    }
}
export default VerifyUser;