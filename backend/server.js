require('dotenv').config();
const express = require('express'); 
const app = express(); 
const cors = require('cors');
const corsOptions = require('./config/corsOptions');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const connectDB = require('./config/dbConn');
const PORT =  process.env.PORT || 3500;

connectDB();

app.use(cors(corsOptions));
app.options('*', cors(corsOptions))

app.use(express.urlencoded({ extended: true  }));
app.use(express.json());

app.use(cookieParser());

app.use('/register', require('./routes/register'));
app.use('/login', require('./routes/login'));
app.use('/profile', require('./routes/profile'));
app.use('/logout', require('./routes/logout'));
app.use('/cottage/booking', require('./routes/cottageBooking'))

app.use('/adminregister', require('./routes/adminregister'));~
app.use('/adminlogin', require('./routes/adminlogin'));
app.use('/adminprofile', require('./routes/adminprofile'));
app.use('/adminlogout', require('./routes/adminlogout'));


app.use('/adminlogout', require('./routes/adminlogout'));



mongoose.connection.once('open', () => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => { console.log(`Server running on port ${PORT}`) });
});
