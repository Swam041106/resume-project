const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.use('/api/candidates',     require('./routes/candidate'));
app.use('/api/profile',        require('./routes/profile'));
app.use('/api/education',      require('./routes/education'));
app.use('/api/experience',     require('./routes/experience'));
app.use('/api/skills',         require('./routes/skills'));
app.use('/api/projects',       require('./routes/projects'));
app.use('/api/certifications', require('./routes/certifications'));
app.use('/api/achievements',   require('./routes/achievements'));
app.use('/api/languages',      require('./routes/languages'));
app.use('/api/hobbies',        require('./routes/hobby'));
app.use('/api/platforms',      require('./routes/platforms'));
app.use('/api/jobs',           require('./routes/jobs'));
app.use('/api/documents',      require('./routes/documents'));
app.use('/api/templates',      require('./routes/template'));

// ✅ ADD THIS LINE
app.use('/api/resume', require('./routes/resume'));

app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));