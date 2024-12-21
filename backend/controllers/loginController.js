const User = require('../model/User');  
const bcrypt = require('bcrypt'); 
const jwt = require('jsonwebtoken');


const jwtSecret = 'thisismysecretkey';

const handleLogin = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
    if (user) {
    const passOk = await bcrypt.compare(password, user.password);
    if (passOk) {
        jwt.sign({
            email: user.email,
            id: user._id
        },jwtSecret, { expiresIn: '1d' }, (err, token) => {
            if (err) throw err;
            res.cookie('token', token ).json(user);
        });
    } else {
        res.status(422).json('pass not ok')
    }
  } else {
    res.status(404).json('user not found')
  }
}

module.exports = { handleLogin };