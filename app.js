require('dotenv').config()
//async errors
require('express-async-errors');

const connectDB = require('./db/connect');
const productsRouter = require('./routes/products')


const express = require('express');
const app = express();


const notFoundMiddleware = require('./middleware/not-found')
const errorHandlerMiddleware = require('./middleware/error-handler');

//middleware

app.use(express.json());

//routes
app.get('/' , (req , res) =>{
    res.send('<h1>Store Api</h1><a href="api/v1/products">Product Route</a>');
})

app.use('/api/v1/products' , productsRouter);

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware); 

const port = process.env.PORT || 3000;

const start = async () => {
    try {
        //connectDB
        await connectDB(process.env.MONGO_URI);
        app.listen(port , console.log(`✅ Server Is Listening To Port ${port}...`));
    } catch (error) {
        console.log(error);
    }

}

start();