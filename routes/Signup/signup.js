import express from 'express';
import Users from '../../db/models/userSchema.js';
import checkToken from '../../middlewares/checkToken.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const router = express.Router();

router.post('/signup', async (req, res) => {
  const body = { ...req.body };
  console.log(body);
  const check = await Users.findOne({ email: body.email });
  if (check) {
    return res.status(400).json({ error: 'Email already exists' });
  }
  const hashedPassword = await bcrypt.hash(body.password, 2);
  body.password = hashedPassword;

  let cart = {};
  for (let i = 0; i < 300; i++) {
    cart[i] = 0;
  }
  body.cartData = cart;

  const response = await Users.create(body);

  return res
    .status(200)
    .json({ message: 'sign up successfull', check: response });
});

router.post('/login', async (req, res) => {
  const body = { ...req.body };
  console.log(body);

  const user = await Users.findOne({ email: body.email });
  if (!user) {
    return res.status(400).json({ error: 'email or password incorrect' });
  }
  const isMatching = await bcrypt.compare(body.password, user.password);
  if (!isMatching) {
    return res.status(400).json({ error: 'email or password incorrect' });
  }
  const key = process.env.SECRET_KEY;
  const token = jwt.sign({ role: 'USER', id: user._id }, key, {
    expiresIn: '7d',
  });
  console.log(isMatching);
  console.log(token);
  res.status(200).json({ message: 'Login Successfull', token });
});

export default router;
