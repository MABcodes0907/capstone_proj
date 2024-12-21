const Admin = require('../model/Admin');  
const bcrypt = require('bcrypt');  

const handleNewAdmin = async (req, res) => {
    const { email, password } = req.body;
    if (!email ||!password) return res.status(400).json({ 'message': 'fill up required fields' });
    const duplicate = await Admin.findOne({ email: email }).exec();
    if (duplicate) return res.sendStatus(409);

    try {
        const hashedPassword = await bcrypt.hash(password, 10);

        const result = await Admin.create({ 
            "email": email,
            "password": hashedPassword 
        });
        
        console.log(result);
        res.status(201).json({ 'success': `New user ${email} created!` });  
    } catch (err) {
        res.status(500).json({ 'message': err.message });
    }
}

module.exports = { handleNewAdmin };