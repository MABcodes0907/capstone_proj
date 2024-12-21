const Admin = require('../model/Admin');  
const bcrypt = require('bcrypt'); 
const jwt = require('jsonwebtoken');


const jwtSecret = 'thisismysecretkey';

const handleAdminLogin = async (req, res) => {
  const { email, password } = req.body;
  const admin = await Admin.findOne({ email });
    if (admin) {
    const passOk = await bcrypt.compare(password, admin.password);
    if (passOk) {
        jwt.sign({
            email: admin.email,
            id: admin._id
        },jwtSecret, { expiresIn: '1d' }, (err, token) => {
            if (err) throw err;
            res.cookie('token', token ).json(admin);
        });
    } else {
        res.status(422).json('pass not ok')
    }
  } else {
    res.status(404).json('user not found')
  }
}

module.exports = { handleAdminLogin };