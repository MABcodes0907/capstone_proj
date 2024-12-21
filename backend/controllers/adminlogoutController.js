const handleAdminLogout = (req, res) => {
    res.cookie('token', '').json(true)
}

module.exports = { handleAdminLogout };