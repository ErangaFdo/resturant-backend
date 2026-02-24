import express, { Router } from 'express';
import { submitFeedback } from '../controller/feedbackController';
import { authenticate } from '../middleware/auth';
import { requireRole } from '../middleware/role';
import { Role } from '../model/authModel';

const router = Router()

router.post('/submit', authenticate, requireRole([Role.USER]) , submitFeedback);
export default router;