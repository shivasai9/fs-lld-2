const express = require("express");

require('dotenv').config();  // to access the environment variales.

const connectDB = require("./config/dbConfig");
const userRouter = require("./routes/userRouter")

const app = express();
app.use(express.json());

connectDB();


/** Routes */
app.use('/api/users', userRouter);

app.use((req,res) => {
    res.status(404).json({message: "Page not found"});
});

app.listen(8082, () => {
    console.log("Server is running on port 8082");
})