import express from 'express';

const router = express.Router();

router.get('/:id', (req, res) => {
  const { id } = req.params;

  console.log('User', id);

  res.status(200).json({ user: id });
});

export default router;
