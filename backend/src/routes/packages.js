import express from 'express';
import { getAllPackages, getPackageById } from '../controllers/packageController.js';

const router = express.Router();

// Get all packages
router.get('/', getAllPackages);

// Get package by ID
router.get('/:id', getPackageById);

export default router;
