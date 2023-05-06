import {Request,Response} from 'express';
import UserModel from '../Models/UserModel';
import bcrypt from 'bcrypt';
import { CreateToken } from '../Helpers/JwsManager';

const saltsRound = 13

const registerUser = function(req : Request, res : Response){
    if(req.body.password && req.body.email && req.body.username){
       bcrypt.hash(req.body.password,saltsRound).then((hash) => {
            const User = new UserModel({
                username: req.body.username,
                email: req.body.email,
                password: hash
            })
            User.save().then(()=> {
                res.status(201).send('CORRECT REGISTER')
            }).catch((err) => {
                res.status(500).send('CHECK THE FIELDS')
            })
       });
    }else{
        res.status(400).send('CHECK THE FIELDS')
    }
};

const loginUser = function(req : Request, res : Response){
    if(req.body.password && req.body.email){
        UserModel.find({email: req.body.email}).then( (fields)=> {
            bcrypt.compare(req.body.password,fields[0].password).then((result)=> {
                if(result){
                    const token = CreateToken(fields[0]._id.toString());
                    res.status(201).cookie("access_token", token, {httpOnly: true}).send({token})
                }else{
                    res.status(203).send('PASSWORD INCORRECT')
                }
            })
        }).catch((err)=>{
            res.status(500).send('HAVE AN ERROR')
        })
    }else{
        res.status(203).send('CHECK THE FIELDS')
    }
}

export {registerUser,loginUser};