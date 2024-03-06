import express from 'express';
import departmentRoutes from './department/index.js';
import imageRoutes from './image/index.js';
import medicineRoutes from './medicine/index.js';
import PrescriptionRoutes from './prescription/index.js';
import DoctorRoutes from './doctor/index.js';
const router = express.Router();

router.use('/department', departmentRoutes);
router.use('/upload', imageRoutes);
router.use('/medicine', medicineRoutes);
router.use('/prescription', PrescriptionRoutes);
router.use('/doctor', DoctorRoutes);

export default router;
