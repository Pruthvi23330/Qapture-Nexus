const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// Mock Database
let db = {
    users: {}, // { email: { resumes: [], applications: [] } }
    jobs: [
        { id: 1, company: "Hindustan Aerospace Limited", role: "Engineer Trainee", location: "Bangalore", salary: "₹400,000 LPA", deadline: "2026-04-29" }
    ]
};

// Middleware to ensure user exists in our "DB"
const ensureUser = (req, res, next) => {
    const email = req.headers['user-email'];
    if (!email) return res.status(401).json({ error: "Unauthorized" });
    if (!db.users[email]) {
        db.users[email] = { resumes: [], applications: [] };
    }
    req.userEmail = email;
    next();
};

// --- ROUTES ---

// 1. Get Jobs
app.get('/api/jobs', (req, res) => res.json(db.jobs));

// 2. Get User Data
app.get('/api/user/data', ensureUser, (req, res) => {
    res.json(db.users[req.userEmail]);
});

// 3. Upload Resume (Simulated)
app.post('/api/resumes', ensureUser, (req, res) => {
    const { name } = req.body;
    const user = db.users[req.userEmail];
    if (user.resumes.length >= 5) return res.status(400).json({ error: "Limit reached" });
    
    const newResume = { id: Date.now(), name, date: new Date().toLocaleDateString() };
    user.resumes.push(newResume);
    res.json(newResume);
});

// 4. Apply for Job
app.post('/api/apply', ensureUser, (req, res) => {
    const { jobId } = req.body;
    const user = db.users[req.userEmail];
    const job = db.jobs.find(j => j.id === jobId);

    if (user.applications.find(a => a.id === jobId)) return res.status(400).json({ error: "Already applied" });

    const application = { ...job, status: 'Applied' };
    user.applications.push(application);
    res.json(application);
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));