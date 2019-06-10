const express = require('express');
const port = 5500;
const app = express();
const user = require('./routes/user');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

//body-parser
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

mongoose.set('useCreateIndex', true)

app.use('/user', user);

//DB connection
mongoose.connect('mongodb://nvnbank:nvnbank1234@ds247223.mlab.com:47223/nvnbank', { useNewUrlParser: true })
.then(() => {console.log('MongoDB is connected')})
.catch((err) => {console.log(err)})



app.listen(port, () => {
   console.log(`Server is running on ${port}`)
})
