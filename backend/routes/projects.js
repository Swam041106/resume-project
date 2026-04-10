const express = require('express');
const router = express.Router();
let projects = [];

router.get('/', (req, res) => res.json(projects));
router.post('/', (req, res) => {
  const p = { id: Date.now(), ...req.body };
  projects.push(p);
  res.json({ success: true, data: p });
});
module.exports = router;