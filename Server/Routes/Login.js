const express = require('express');
const router = express.Router();
// const bcrypt = require('bcrypt');
const { User } = require('../models');

// Middleware for logging requests
router.use((req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    next();
});

// GET route handler
router.get('/', (req, res) => {
    res.json("Hello");
});

// POST route handler
router.post('/', async (req, res) => {

    const user = req.body;
    await User.create(user);
    res.json(user);
    // try {
    //     // Extract user data from request body
    //     const { username, email, phone_number, password } = req.body;

    //     // Input validation
    //     if (!username || !email || !phone_number || !password) {
    //         return res.status(400).json({ error: 'All fields are required' });
    //     }

    //     // Check if email is already registered
    //     const existingUser = await User.findOne({ where: { email } });
    //     if (existingUser) {
    //         return res.status(400).json({ error: 'Email is already registered' });
    //     }

    //     // Hash the password  
    //     const hashedPassword = await bcrypt.hash(password, 10);

    //     // Create user record in the database
    //     const newUser = await User.create({
    //         username,
    //         email,
    //         phone_number,
    //         password: hashedPassword, // Store hashed password
    //     });

    //     // Respond with the created user data
    //     res.status(201).json(newUser);
    // } catch (error) {
    //     // Handle any errors
    //     console.error('Error creating user:', error.message);
    //     res.status(500).json({ error: 'An unexpected error occurred' });
    // }

});

module.exports = router;
