const express = require('express');
const router = express.Router();
let education = [];

router.get('/', (req, res) => res.json(education));
router.post('/', (req, res) => {
  const e = { id: Date.now(), ...req.body };
  education.push(e);
  res.json({ success: true, data: e });
});
module.exports = router;