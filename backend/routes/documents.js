const express = require('express');
const router = express.Router();
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });
let documents = [];

router.get('/', (req, res) => res.json(documents));
router.post('/', upload.single('file'), (req, res) => {
  const d = { id: Date.now(), filename: req.file.originalname, type: req.body.docType };
  documents.push(d);
  res.json({ success: true, data: d });
});
module.exports = router;