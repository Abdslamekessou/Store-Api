const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name : {
        type : String ,
        required : [true , 'You Must Provide A Product Name'] ,
        trim: true,
        maxlength: 100
    } ,
    price : {
        type: Number ,
        required : [true , 'Price Must be Provided'] 
    },
    featured : {
        type:Boolean,
        default:false
    } ,
    rate :  {
        type : Number ,
        default : 4.5
    } ,
    createdAt :  {
        type: Date ,
        default : Date.now
    },
    company : {
        type : String ,
        enum :{
            values: ['ikea', 'liddy', 'caressa', 'marcos'],
            message : '${VALUE} Is Not Valid Comapany name for ${PATH}'
        }
    }
    
})

module.exports = mongoose.model('Product', productSchema);
