const express = require("express");
const errormiddleware = require("./middleware/error");
const user = require("./routes/userRoute");
const product = require("./routes/productRoute");
const order = require("./routes/orderRoute");
const payment = require("./routes/paymentRoute")
const cookieParser = require("cookie-parser");
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload')
const cors = require('cors')
const dotenv= require('dotenv');
const category = require("./routes/categoryRoute");


// dot env confuguration
dotenv.config({path:"backend/config/config.env"})
const app = express();


app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({extended : true,limit: '50mb'}));
app.use(cors({"Access-Control":"Allow-Origin"}))
app.use(cookieParser());
app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(fileUpload());
app.use("/api/v1", product);
app.use("/api/v1", user);
app.use("/api/v1", order);
app.use("/api/v1",payment);
app.use("/api/v1",category);
// app.post(
//     '/contact',async(req,res)=>{
        
//     }
// )
//middleware for error
app.use(errormiddleware);

module.exports = app;
