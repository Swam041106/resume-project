const express = require('express');
const router = express.Router();
let jobs = [];

router.get('/', (req, res) => res.json(jobs));
router.post('/', (req, res) => {
  const j = { id: Date.now(), ...req.body };
  jobs.push(j);
  res.json({ success: true, data: j });
});
module.exports = router;