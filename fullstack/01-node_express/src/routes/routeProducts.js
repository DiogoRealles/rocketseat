import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  const { category } = req.query;

  console.log('categoria:', category);

  res.status(200).json({ category: category });
});

export default router;
