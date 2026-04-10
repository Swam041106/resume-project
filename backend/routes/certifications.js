const express = require('express');
const router = express.Router();
let certifications = [];

router.get('/', (req, res) => res.json(certifications));
router.post('/', (req, res) => {
  const c = { id: Date.now(), ...req.body };
  certifications.push(c);
  res.json({ success: true, data: c });
});
module.exports = router;