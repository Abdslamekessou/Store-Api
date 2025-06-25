const product = require('../models/product');
const Product = require('../models/product')

const getAllProductsStatic = async (req , res) =>{
    const search = 'a';
    const products = await Product.find({price : {$gt :30}}).sort('price').select('name price').limit(9).skip(5);
    res.status(200).json({products ,nbHits: products.length});
}

const getAllProducts = async (req , res) =>{
    const {featured , company , name , sort , fields , numericFilters } = req.query  

    const queryObject = {}
    if(featured){
        queryObject.featured = featured === 'true' ? true : false; 
    }
    
    if(company){
        queryObject.company = company;
    }

    if(name){
        queryObject.name = {$regex : name , $options : 'i' } ;
    }

    if(numericFilters){
        const operatorMap ={
            '>' : '$gt' ,
            '>=' : '$gte' ,
            '=' : '$eq' ,
            '<' : '$lt' ,
            '<=' : '$lte' 
        }
        const regEx = /\b(<|>|<=|>=|=)\b/g
        let filters = numericFilters.replace(regEx , (match => `-${operatorMap[match]}-`))
        
        const options = ['rate' , 'price'];
        filters = filters.split(',').forEach((item) => {
            const [field , operator , value ] = item.split('-');
            if(options.includes(field)){
                queryObject[field] = {[operator] : Number(value)};
            }
        })
    }

    let result = Product.find(queryObject); // Build the MongoDB query with filters
    //sort
    if (sort) {
        const sortList = sort.split(',').join(' ') // convert to Mongoose sort format . e.g., "price,-name" → "price -name"
        result = result.sort(sortList); // Apply dynamic sorting based on user input (e.g., ?sort=price)
    }else{
        result = result.sort('createdAt')
    }


    if(fields){
        const fieldList = fields.split(',').join(' '); 
        result = result.select(fieldList); 
    }
    

    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 10
    const skip = (page - 1 ) * limit
    
    result = result.skip(skip).limit(limit)


    const products = await result; // Wait for MongoDB to execute the query and return the result
    res.status(200).json({products , nbHits : products.length});
}

module.exports ={
    getAllProductsStatic ,
    getAllProducts
}