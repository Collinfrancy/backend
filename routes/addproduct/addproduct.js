import express from 'express';
import Product from '../../db/models/ProductSchema.js';

const router = express.Router();

router.post('/add', async (req, res) => {
  let id;
  try {
    let products = await Product.find({});
    if (products.length > 0) {
      let last_product_arrary = products.slice(-1);
      let last_product = last_product_arrary[0];
      req.body.id = last_product.id + 1;
    } else {
      req.body.id = 1;
    }
    const product = await Product.create(req.body);
    res.status(200).json(product);
  } catch (e) {
    res.status(500).json(e);
  }
});

router.post('/delete/:id', async (req, res) => {
  const { id } = req.params;
  console.log(id);
  await Product.findOneAndDelete({ id: id });
  res.status(200).json('deleted sucessfully');
});

router.get('/allproducts', async (req, res) => {
  let products = await Product.find({});
  res.status(200).json(products);
});

router.get('/newcollections', async (req, res) => {
  let products = await Product.find({});
  let newcollection = products.slice(1).slice(-8);
  res.status(200).json(newcollection);
});

router.post('/addtocart', async (req, res) => {});

router.get('/popularinwomen', async (req, res) => {
  let products = await Product.find({ category: 'women' });
  let popular_in_women = products.slice(0, 4);
  res.status(200).json(popular_in_women);
});

export default router;
