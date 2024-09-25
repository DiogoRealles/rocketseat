import express from 'express';

const router = express.Router();

router.post('/', (req, res) => {
  const { title, body } = req.body;

  console.log(title, body);

  res.status(201).json({ title, body });
});

export default router;
