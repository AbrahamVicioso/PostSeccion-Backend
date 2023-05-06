import express from 'express';
import {Express} from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cookie from 'cookie-parser';
import path from 'path';

mongoose.connect("mongodb://localhost:27017/multinotes")

dotenv.config();
const app: Express = express();

// Set Cooker-Parser
app.use(cookie());

//SET JSON REQUEST
app.use(express.json());

// SET ROUTES
app.use('/user', require('./routes/Users'));
app.use('/notes', require('./routes/Notes'));

// STATIC FILES
app.use("/static",express.static(path.join(__dirname + '/Client/Public')))

// SET THE PORT SERVER
app.set('PORT', process.env.PORT || 3000);

// LISTEN THE SERVER
app.listen(app.get('PORT'), () => [
    console.log('SERVER RUNNING IN PORT: ' + app.get('PORT'))
])