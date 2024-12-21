const User = require('../model/User');  
const bcrypt = require('bcrypt');  

const handleNewUser = async (req, res) => {
    const { firstname, lastname, email, password } = req.body;
    if (!firstname ||!lastname ||!email ||!password) return res.status(400).json({ 'message': 'fill up required fields' });
    const duplicate = await User.findOne({ email: email }).exec();
    if (duplicate) return res.sendStatus(409);

    try {
        const hashedPassword = await bcrypt.hash(password, 10);

        const result = await User.create({ 
            "firstname": firstname,
            "lastname": lastname,
            "email": email,
            "password": hashedPassword 
        });
        
        console.log(result);
        res.status(201).json({ 'success': `New user ${email} created!` });  
    } catch (err) {
        res.status(500).json({ 'message': err.message });
    }
}

module.exports = { handleNewUser };