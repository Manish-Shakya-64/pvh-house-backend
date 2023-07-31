const app = require('./app');
const dotenv= require('dotenv');
const connectDatabase = require('./config/database');
const cloudinary = require('cloudinary');

//handling uncaught exception
process.on("uncaughtException",(err)=>{
    console.log(`Error: ${err.message}`)
    console.log(`shutting down server due to uncaught exception`)
    process.exit(1);
})


//dot env configuration
dotenv.config({path:"backend/config/config.env"})

//connecting to database
connectDatabase()

//cloudinary
cloudinary.v2.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key:process.env.CLOUDINARY_API_KEY,
    api_secret:process.env.CLOUDINARY_API_SECRET,
})

const server = app.listen(process.env.PORT,() => {
    console.log(`sever is working on http://localhost:${process.env.PORT}`);
})

//unhandled Promise rejection

process.on("unhandledRejection",(err)=>{
    console.log(`Error: ${err.message}`);
    console.log(`shutting down server due to unhandled Promise Rejection`);

    server.close(()=>{
        process.exit(1);
    });
});