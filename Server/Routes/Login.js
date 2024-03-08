const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');
const { User } = require('../models');

// Middleware for logging requests
router.use((req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    next();
});

// GET route handler
router.get('/', async (req, res) => {
    const listofUsers = await User.findAll();
    res.json(listofUsers);
    
});

// POST route handler
router.post('/', async (req, res) => {

    const user = req.body;
    await User.create(user);
    res.json(user);
   
});

module.exports = router;
