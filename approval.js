const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const authorizedUsers = {
    username: "GURU",
    password: "GURU12"
};

let approvals = [];

function authenticate(req, res, next) {
    const { username, password } = req.body;
    if (username === authorizedUsers.username && password === authorizedUsers.password) {
        next();
    } else {
        res.status(401).json({ message: 'Unauthorized' });
    }
}

app.post('/request-approval', (req, res) => {
    const { userId, whatsappNumber } = req.body;
    approvals.push({ userId, whatsappNumber, isApproved: false, requestedAt: new Date() });
    res.json({ message: 'Approval requested. We will contact you soon.', userId });
});

app.post('/approve-user', authenticate, (req, res) => {
    const { userId } = req.body;
    const user = approvals.find(a => a.userId === userId);
    if (user) {
        user.isApproved = true;
        setTimeout(() => {
            user.isApproved = false;
        }, 30 * 24 * 60 * 60 * 1000);
        res.json({ message: 'User approved successfully!' });
    } else {
        res.status(404).json({ message: 'User not found' });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
