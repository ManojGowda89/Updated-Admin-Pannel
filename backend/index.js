//imports
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const cors = require('cors');
const mongoose = require('mongoose');
const userRoutes = require('./routes/routes')
const bodyParser = require('body-parser')

mongoose.connect('mongodb://localhost:27017/crud')



app.use(bodyParser.json({limit:"30mb",extended:true}))
app.use(bodyParser.urlencoded({limit:"30mb",extended:true}))
app.use(cors());


app.use('/api',userRoutes)


// {
//     "name": "John Doe",
//     "email": "john.doe@example.com",
//     "password": "password123"
// }


//lesson server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});