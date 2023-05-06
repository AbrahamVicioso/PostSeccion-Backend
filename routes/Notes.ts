import express, {Request,Response,Router} from "express";
import VerifyUser from "../Middleware/AuthUser";
import { addNote, getNotes } from "../Controllers/NoteController";

const routes: Router = express.Router();

routes.post('/addnote', VerifyUser , addNote);
routes.get('/', getNotes);

module.exports = routes;