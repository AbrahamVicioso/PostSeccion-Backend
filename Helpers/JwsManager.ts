import * as jws from 'jsonwebtoken';

const JWTSECRET = process.env.JWT_SCRT

const CreateToken = function(Userid: String){
    try{
        return jws.sign({Userid: Userid}, JWTSECRET || "", {expiresIn: '24h'})
    }catch{
        return undefined
    }
}


export {CreateToken};