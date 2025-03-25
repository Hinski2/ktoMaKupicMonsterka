import express from 'express';
import { getContracts } from '../controllers/contract.js';

const router = express.Router();

// get methods
router.get('/', getContracts);

// post methods 

// patch methods 

// delete methods 