const express = require('express');
const router = express.Router();
let hobbies = [];

router.get('/', (req, res) => res.json(hobbies));
router.post('/', (req, res) => {
  const h = { id: Date.now(), ...req.body };
  hobbies.push(h);
  res.json({ success: true, data: h });
});
module.exports = router;