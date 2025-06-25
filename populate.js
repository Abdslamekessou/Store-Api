require('dotenv').config();

const connectDB = require('./db/connect');
const Product = require('./models/product');

const ProductJson = require('./products.json');


const start = async () =>{
    try {
        await connectDB(process.env.MONGO_URI); 
        await Product.deleteMany();
        await Product.create(ProductJson);
        console.log('✅ Database populated successfully');
        process.exit(0);
    } catch (error) {
        console.error('❌ Error populating DB:', error);
        process.exit(1);
    }
    
}

start();