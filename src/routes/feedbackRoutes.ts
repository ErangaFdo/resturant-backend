import express, { Router } from 'express';
import { submitFeedback } from '../controller/feedbackController';

const router = Router()

router.post('/submit', submitFeedback);
export default router;