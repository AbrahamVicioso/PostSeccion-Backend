import mongoose from "mongoose";

const UserSchem = new mongoose.Schema({
    username: {
        type: 'String',
        unique: true,
        required: [true, 'ADD THE USERNAME']
    },
    email: {
        type: 'String',
        unique: true,
        required: [true, 'ADD THE EMAIL']
    },
    password: {
        type: 'String',
        required: [true, 'ADD THE PASSWORD']
    }
});

const UserModel = mongoose.model('USER', UserSchem);

export default UserModel;