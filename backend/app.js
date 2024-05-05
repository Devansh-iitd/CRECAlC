const express = require('express'); 
const app = express();
const cors = require('cors');
const functions = require('./routes/functions');


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());



app.use('/functions', functions);


app.listen(5000, () => {
    console.log('Server is running on port 5000');
});
