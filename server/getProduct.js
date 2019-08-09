const products = require('./../products.json')

const getProduct = (req, res) => {

    itemArr = products.filter((element) => {
        console.log('element', element)
        console.log('id', +req.params.id)
        return +req.params.id === element.id
    })

    console.log(+req.params.id)
    console.log(itemArr)

    if (itemArr.length === 0) {
        res.status(500).send('Item not in list')
    }
    else {
        res.status(200).send(itemArr[0])
    }
}

module.exports = getProduct