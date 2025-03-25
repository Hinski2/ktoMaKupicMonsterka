import express from 'express';
import { getUsers } from '../controllers/user.js';

const router = express.Router();

// get methods
router.get('/', getUsers);

// post methods

// patch methods 

// delete methods