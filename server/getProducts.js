const products = require('./../products.json')

const getProducts = (req, res) => {

    if (!req.query.hasOwnProperty('price')) {
        res.status(200).send(products)
    }
    else {
        const newArr = products.filter((element) => {
            return +req.query.price <= element.price
        })

        res.status(200).send(newArr)
    }
}

module.exports = getProducts