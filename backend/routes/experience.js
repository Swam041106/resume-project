const express = require('express');
const router = express.Router();
let experience = [];

router.get('/', (req, res) => res.json(experience));
router.post('/', (req, res) => {
  const e = { id: Date.now(), ...req.body };
  experience.push(e);
  res.json({ success: true, data: e });
});
module.exports = router;