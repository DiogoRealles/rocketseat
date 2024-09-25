import express from 'express';
import routerUsers from './routeUsers.js';
import routerProducts from './routeProducts.js';
import routerNotes from './routeNotes.js';

const router = express.Router();

router.use('/users', routerUsers);
router.use('/products', routerProducts);
router.use('/notes', routerNotes);

router.get('/', (req, res) => {
  console.log('Hello World - Express!');

  res.status(200).json({ message: 'Hello World - Express!' });
});

export default router;
