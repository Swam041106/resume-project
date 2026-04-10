const express = require('express');
const router = express.Router();
let profiles = [];

router.get('/', (req, res) => res.json(profiles));
router.post('/', (req, res) => {
  const p = { id: Date.now(), ...req.body };
  profiles.push(p);
  res.json({ success: true, data: p });
});
module.exports = router;