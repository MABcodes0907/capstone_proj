const User = require('../model/User');  
const jwt = require('jsonwebtoken');

const jwtSecret = 'thisismysecretkey';

const getProfile = async (req, res) => {
    const {token} = req.cookies;
    if (token) {
        jwt.verify(token, jwtSecret, {}, async (err, userData) => {
            if (err) throw err;
            const {firstname,email,_id} = await User.findById(userData.id)
            res.json({firstname,email,_id});
        })
    } else {
        res.json(null);
}}

module.exports = { getProfile };