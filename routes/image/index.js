import express from 'express';
import multer from 'multer';
import { nanoid } from 'nanoid';
const router = express.Router();

const sto = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads'); //uploads is the folder to which image need to be saved
  },
  filename: (req, file, cb) => {
    cb(null, `${nanoid()}-${file.originalname}`);
  },
});
const upload = multer({ storage: sto });

router.post('/image', upload.single('file'), (req, res) => {
  res.status(200).json({ url: `http://localhost:4444/${req.file.filename}` });
});

export default router;
