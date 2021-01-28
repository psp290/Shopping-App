const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const db = require('./db');


const productRoutes = require('./routes/product');
const brandRoutes = require('./routes/brand');
const typeRoutes = require('./routes/type');


const port = process.env.PORT || 2000;
const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());


app.get('/',(req,res)=>{
    res.status(200).send('Health Ok');
});


app.use("/api",productRoutes);
app.use("/api",brandRoutes);
app.use("/api",typeRoutes);



app.listen(port,(err)=>{
    if(err) throw err;

    console.log(`Server is running on port ${port}`);
});