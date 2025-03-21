const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../models/user');
require('dotenv').config();

const signup = (req, res) => {
    const { name, username, password } = req.body;
    const hashedPassword = bcrypt.hashSync(password, 8);

    User.create({ name, username, password: hashedPassword }, (err, result) => {
        if (err) return res.status(500).send('Error registering user');
        res.status(201).send('User registered successfully');
    });
};

const login = (req, res) => {
    const { username, password } = req.body;

    User.findByUsername(username, (err, results) => {
        if (err || results.length === 0) return res.status(404).send('User not found');

        const user = results[0];
        const passwordIsValid = bcrypt.compareSync(password, user.password);

        if (!passwordIsValid) return res.status(401).send('Invalid password');

        const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '10m' });
        res.status(200).send({ token });
    });
};

module.exports = { signup, login };