exports.createProduct = (req, res, next) => {
    res.json(
        {
            message: 'Create Product Success',
            data: {
                id: 1,
                name: "Cilok",
                price: 500
            }
         });
    next();
}

exports.getAllProducts = (req, res, next) => {
    res.json(
        {
            message: 'Get All Products Success',
            data: {
                id: 1,
                name: "Cilok",
                price: 500
            }
         });
    next();
}