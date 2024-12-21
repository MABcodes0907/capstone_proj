const Admin = require('../model/Admin');  
const jwt = require('jsonwebtoken');

const jwtSecret = 'thisismysecretkey';

const getAdminProfile = async (req, res) => {
    const {token} = req.cookies;
    if (token) {
        jwt.verify(token, jwtSecret, {}, async (err, adminData) => {
            if (err) throw err;
            const {email,password,_id} = await Admin.findById(adminData.id)
            res.json({email,password,_id});
        })
    } else {
        res.json(null);
}}

module.exports = { getAdminProfile };