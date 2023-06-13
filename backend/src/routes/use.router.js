import AccountRouter from './account.router.js';
import ProductsRouter from './products.router.js';
import CartsRouter from './cart.router.js'

import loggerTestRouter from "../utils/winston/logger.test.js";
import MockRouter from "../utils/mocks.js";

import swagger from '../docs/swagger.js';

const accountRouter = new AccountRouter()
const productsRouter = new ProductsRouter()
const cartsRouter = new CartsRouter()






const useRoutes = (app)=>{
    // API DOCS
    app.use('/api/docs', swagger.ui, swagger.setup)
    // API
    app.use('/account', accountRouter.getRouter())
    app.use('/api/products', productsRouter.getRouter())
    app.use('/api/carts', cartsRouter.getRouter())

    //TESTS
    const MockProducts = new MockRouter()
    app.use('/mockingproducts', MockProducts.getRouter())
    app.use('/loggerTest', loggerTestRouter.getRouter())
}

export default useRoutes