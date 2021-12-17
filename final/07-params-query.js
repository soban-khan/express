const express = require('express')
const app = express()
const {
    products
} = require('./data')

// console.log(products)

app.get('/', (req, res) => {
    res.status(202).send('<h1> Home page </h1> <a href="/api/products">Products</a>')
})

// app.get('/api/products', (req, res) => {
//     const newProducts = products.map((product) => {
//         const {
//             id,
//             name,
//             image
//         } = product
//         return {
//             id,
//             name,
//             image
//         }
//     })
//     res.json(newProducts)
// })

// now if we need to access any one particular product according to its id
// but this isn't a good approach because we will have to make a route for each id
// app.get('/api/products/1', (req, res) => {
//     const singleProduct = products.find((product) => product.id === 1)
//     res.json(singleProduct)
// })

// using route parameters
app.get('/api/products/:productId', (req, res) => {
    const {
        productId
    } = req.params

    const singleProduct = products.find((product) => product.id === Number(productId))
    singleProduct == undefined ? res.status(404).send('Product') : res.json(singleProduct)
})

app.get('/api/v1/query', (req, res) => {
    // console.log(req.query)
    let sortedProducts = [...products]
    let {
        search,
        limit
    } = req.query
    if (search) {
        sortedProducts = sortedProducts.filter((product) => {
            return product.name.startsWith(search)
        })
    }
    if (limit) {
        sortedProducts = sortedProducts.slice(0, Number(limit))
    }

    if (sortedProducts.length === 0) {
        // res.status(200)
        // res.send('No products matched your search')
        // or we can also send json as below
        return res.status(200).json({
            'success': true,
            'data': []
        })
    }
    res.status(200).json(sortedProducts)
})

app.all('*', (req, res) => {
    res.status(404).send('Resource not present')
})

app.listen(5000, () => {
    console.log('Server listening on port 5000...')
})