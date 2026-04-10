const express = require('express');
const router = express.Router();
let achievements = [];

router.get('/', (req, res) => res.json(achievements));
router.post('/', (req, res) => {
  const a = { id: Date.now(), ...req.body };
  achievements.push(a);
  res.json({ success: true, data: a });
});
module.exports = router;