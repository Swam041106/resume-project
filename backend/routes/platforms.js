const express = require('express');
const router = express.Router();
let platforms = [];

router.get('/', (req, res) => res.json(platforms));
router.post('/', (req, res) => {
  const p = { id: Date.now(), ...req.body };
  platforms.push(p);
  res.json({ success: true, data: p });
});
module.exports = router;