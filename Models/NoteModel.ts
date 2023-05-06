import mongoose from "mongoose";

const NoteSchem = new mongoose.Schema({
    notename: {
        type: 'String',
        required: [true, 'ADD THE NAME']
    },
    Userid: {
        type: 'String',
        required: [true, 'ADD THE Userid']
    },
    Description: {
        type: 'String',
        required: [true, 'ADD THE Descp']
    },
    Username: {
        type: 'String',
        required: [true, 'ADD THE USERNAME']
    }
})

const NoteModel = mongoose.model('Notes', NoteSchem);

export default NoteModel;