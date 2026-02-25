import express, { Router } from 'express';
import { getAllfeedback, submitFeedback } from '../controller/feedbackController';
import { authenticate } from '../middleware/auth';
import { requireRole } from '../middleware/role';
import { Role } from '../model/authModel';

const router = Router()

router.post('/submit', authenticate, requireRole([Role.USER]) , submitFeedback);
router.get('/getAll' , getAllfeedback);
export default router;