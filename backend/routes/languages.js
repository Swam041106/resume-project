const express = require('express');
const router = express.Router();
let languages = [];

router.get('/', (req, res) => res.json(languages));
router.post('/', (req, res) => {
  const l = { id: Date.now(), ...req.body };
  languages.push(l);
  res.json({ success: true, data: l });
});
module.exports = router;