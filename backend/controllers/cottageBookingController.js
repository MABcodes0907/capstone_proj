const User = require('../model/User');  


const handleCottageBooking = async (req, res) => {
    try {
        const { cottage, cottagetype, payment, date, user } = req.body;
        const users = await User.findOne({ user:user.email }).exec();
        if (users) {
            const result = await User.insertOne({ 
                booking: {
                    "cottage": cottage,
                    "cottagetype": cottagetype,
                    "payment": payment,
                    "date": date 
                  }
            });
            console.log(result);
            res.status(201).json({ message: "Booking created successfully" })};
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
    };

module.exports = { handleCottageBooking };