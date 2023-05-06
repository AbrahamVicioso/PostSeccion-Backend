import {Request,Response} from 'express';
import NoteModel from '../Models/NoteModel';
import * as jws from 'jsonwebtoken';
import UserModel from '../Models/UserModel';

interface JwtPayload {
    Userid : String
}

const JWTSECRET = process.env.JWT_SCRT || "";

const addNote = function(req : Request,res : Response){
    const token = req.headers.authorization?.split(' ').pop() || "";
    const { Userid } = jws.verify(token,JWTSECRET) as JwtPayload

    UserModel.find({_id: Userid}).then((fields) => {
        const note = new NoteModel({
            notename: req.body.notename,
            Userid: Userid,
            Description: req.body.descp,
            Username: fields[0].username
        })

        note.save().then(()=> {
            res.status(201).send("NOTE SEND")
        }).catch(()=>{
            res.status(500).send("HAVE A PROBLEM")
        })
    }).catch(()=> {
        res.status(500).send("HAVE A PROBLEM")
    })
    
}

const deletenote = function(req : Request,res : Response){
    const token = req.headers.authorization?.split(' ').pop() || "";
    const { Userid } = jws.verify(token,JWTSECRET) as JwtPayload

    UserModel.find({_id: Userid}).then((fields) => {
        const note = new NoteModel({
            notename: req.body.notename,
            Userid: Userid,
            Description: req.body.descp,
            Username: fields[0].username
        })

        note.save().then(()=> {
            res.status(201).send("NOTE SEND")
        }).catch(()=>{
            res.status(500).send("HAVE A PROBLEM")
        })
    }).catch(()=> {
        res.status(500).send("HAVE A PROBLEM")
    })
    
}

const getNotes = function(req : Request , res : Response){
    NoteModel.find().then((fields) => {
        res.status(200).send(fields)
    })
}

export {addNote, getNotes}