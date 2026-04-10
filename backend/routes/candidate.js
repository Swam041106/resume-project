const express = require('express');
const router = express.Router();
let candidates = [];

router.get('/', (req, res) => res.json(candidates));
router.post('/', (req, res) => {
  const c = { id: Date.now(), ...req.body };
  candidates.push(c);
  res.json({ success: true, data: c });
});
module.exports = router;