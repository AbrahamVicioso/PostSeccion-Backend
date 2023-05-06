import express, {Request,Response,Router} from "express";
import {registerUser, loginUser} from '../Controllers/UserController';

const routes: Router = express.Router();

routes.post('/register', registerUser);

routes.post('/login', loginUser)

module.exports = routes;