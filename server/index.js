const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const app = express();
const port = 3001;

app.use(bodyParser.json());
app.use(cors());

const secretKey = 'secret';

// Routes
const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/users');
const shopRoutes = require('./routes/shops');

app.use('/auth', authRoutes);
app.use('/users', authenticateToken, userRoutes);
app.use('/shops', authenticateToken, shopRoutes);


function authenticateToken(req, res, next) {
    const token = req.headers['authorization'];
    if (!token) return res.sendStatus(401);

    const authorization = req.headers.authorization.split(" ")[1];

    jwt.verify(authorization, secretKey, (err, user) => {
        if (err) return res.sendStatus(403);
        next();
    });
}

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});