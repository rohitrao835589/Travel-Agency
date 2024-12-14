import express from 'express';
import { getAllPackages, getPackageById } from '../controllers/packageController.js';

const router = express.Router();

// Get all packages
router.get('/packages', getAllPackages);

// Get package by ID
router.get('/package/:id', getPackageById);

export default router;
