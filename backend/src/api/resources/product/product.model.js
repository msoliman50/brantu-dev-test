// 3rd party libraries
const mongoose          = require('mongoose'),
      mongoosePaginate  = require('mongoose-paginate');

// create product schema
const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        index: true
    },
    image: String,
    price: {
        type: Number,
        default: 0
    },
    brand: {
        type: String,
        required: true
    },
    // this is the first option of the category object
    category: {
        id: Number, // just for simplicity, ofcourse it should be ObjectId
        name: {
            type: String,
            required: true
        }
    },

    /* 
        another solution to present the category object
        a reference to the Category Model, this is helpful if you have a lot of modification to the
        category, so it will save effort of maintain the data in multiple collection
        but also it will introduce another query while getting the product to retrive its category
    */

    // category: {
    //     type: mongoose.SchemaTypes.ObjectId,
    //     ref: 'Category'
    // }

});

/*          custom model plugins            */
productSchema.plugin(mongoosePaginate);

module.exports = mongoose.model('Product', productSchema);