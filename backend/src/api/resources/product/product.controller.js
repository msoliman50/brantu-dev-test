// own files
const Product = require('./product.model');

module.exports = {
    async search(req, res) {

        // get query parameters
        const {q, page, perPage} = req.query;

        // pagination setup
        const options = {
            page: parseInt(page, 10) || 1,
            limit: parseInt(perPage, 10) || 10
        };

        // matching criteria
        let queryObject = {};

        // make the needed validation
        if (q && q.trim() !== '') {

            // create the regex for search
            const nameRegex = new RegExp(q, 'i');
            queryObject = {name: nameRegex};
        }

        // get products
        try {
            const products = await Product.paginate(queryObject, options);
            return res.json({
                message: 'products retreived successfully',
                products
            });
        } catch (e) {
            return res.status(500).json({message: 'Unable to load Products'});
        }
        
    }
};