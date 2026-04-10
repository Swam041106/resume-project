const express = require('express');
const router = express.Router();

// Fetch all data from existing APIs
router.get('/', async (req, res) => {
  try {
    const base = "http://localhost:3000/api";

    const [skills, projects, education, experience, profile, candidate] = await Promise.all([
      fetch(`${base}/skills`).then(r => r.json()),
      fetch(`${base}/projects`).then(r => r.json()),
      fetch(`${base}/education`).then(r => r.json()),
      fetch(`${base}/experience`).then(r => r.json()),
      fetch(`${base}/profile`).then(r => r.json()),
      fetch(`${base}/candidates`).then(r => r.json())
    ]);

    res.json({
      skills,
      projects,
      education,
      experience,
      profile,
      candidate
    });

  } catch (err) {
    res.json({ error: "Error fetching resume data" });
  }
});

module.exports = router;