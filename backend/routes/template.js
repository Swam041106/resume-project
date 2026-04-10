const express = require('express');
const router = express.Router();
let templates = [];

router.get('/', (req, res) => res.json(templates));
router.post('/', (req, res) => {
  const t = { id: Date.now(), ...req.body };
  templates.push(t);
  res.json({ success: true, data: t });
});
module.exports = router;