const express = require("express");
const dotenv = require("dotenv");
const connectDatabase = require("./helpers/database/connectDatabase");
const routers = require("./routers");
const customErrorHandler = require("./middlewares/errors/customErrorHandler");
const path = require("path");
const cors = require('cors');
 
//Environment Variables
dotenv.config({
    path: "./config/env/config.env"
});

//MongoDb Connection

connectDatabase();  


const app = express();
app.use(cors());

app.use(
    cors({
      origin: 'http://localhost:8100', // Ionic uygulamanızın adresi
      methods: 'GET,POST,PUT,DELETE,OPTIONS',
      allowedHeaders: 'Content-Type,Authorization', 
    })
  );

  
//Express - Body Middleware
app.use(express.json());

const PORT = process.env.PORT;

// Routers Middleware

app.use("/api", routers);

//Error Handler
app.use(customErrorHandler);

//Static Files
app.use(express.static(path.join(__dirname, "public")));

app.listen(PORT, () => {
    console.log(`App started on ${PORT} : ${process.env.NODE_ENV}`); 
}); 