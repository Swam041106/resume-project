const express = require('express');
const router = express.Router();
let skills = [];

router.get('/', (req, res) => res.json(skills));
router.post('/', (req, res) => {
  const s = { id: Date.now(), ...req.body };
  skills.push(s);
  res.json({ success: true, data: s });
});
module.exports = router;