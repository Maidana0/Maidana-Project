import { faker } from '@faker-js/faker';
import Router from '../routes/router.js';
faker.setLocale('es_MX')



const generateProducts = () => {
    const product = {
        id: faker.database.mongodbObjectId(),
        name: faker.commerce.productName(),
        price: faker.commerce.price(),
        description: faker.commerce.productDescription(),
        category: faker.commerce.department(),
        stock: faker.random.numeric(2),
        image: faker.image.image()
    }
    return product
}


export default class MockCustomeRouter extends Router {
    init() {
        this.get('/', async (req, res) => {
            const products = []
            for (let i = 0; i < 100; i++) {
                const product = generateProducts()
                products.push(product)
            }
            res.json({ products }, null, 2)
        })
    }
}
