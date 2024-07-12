import express from 'express';
import imageRoutes from './image/image.js';
import addproduct from './addproduct/addproduct.js';
import signup from './Signup/signup.js';
const router = express.Router();

router.use('/uploads', imageRoutes);
router.use('/product', addproduct);
router.use('/signlogin', signup);

export default router;
