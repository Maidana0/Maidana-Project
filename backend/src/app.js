import { DBConnect } from "./persistence/mongoDB/dbConfig.js"
import compression from 'express-compression'

const mongoDB = DBConnect.getInstance()
import cors from 'cors'
import express from 'express';
import handlebars from 'express-handlebars';
import { __dirname } from './utils/utils.js'

import './config.js';

//CUSTOME ROUTER
import AccountRouter from './routes/account.router.js';
import ProductsRouter from './routes/products.router.js';
import CartsRouter from './routes/cart.router.js'
// import ViewsRouter from './routes/views.router.js'
//
import loggerTestRouter from "./utils/winston/logger.test.js";
import MockRouter from "./utils/mocks.js";
import { errorMiddleware } from "./utils/error/error.midleware.js";
//

import cookieParser from 'cookie-parser';
import session from 'express-session';
import MongoStore from 'connect-mongo';

import passport from 'passport';
import './routes/middlewares/passport.js'

import config from './config.js'
const { mongo_uri: mongoUrl, mongo_secret: secret, port: PORT } = config
import generateLog from "./routes/middlewares/winston.middleware.js";
import logger from "./utils/winston/winston.js";
const app = express()

const accountRouter = new AccountRouter()
const productsRouter = new ProductsRouter()
const cartsRouter = new CartsRouter()



app.engine('handlebars', handlebars.engine())
app.set('view engine', 'handlebars')
// app.set('views', __dirname + '/../views')

app.use(compression({ brotli: { enabled: true, zlib: {} } }))

app.use(cors())
app.use(cookieParser())

app.use(session({
    store: new MongoStore({ mongoUrl }),
    secret,
    resave: false,
    saveUninitialized: false
}))

app.use(express.static(__dirname + '/../../public'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(passport.initialize())
app.use(passport.session())

app.use(generateLog)


app.use('/account', accountRouter.getRouter())
app.use('/api/products', productsRouter.getRouter())
app.use('/api/carts', cartsRouter.getRouter())
// app.use('/views', viewsRouter.getRouter())
const MockProducts = new MockRouter()
app.use('/mockingproducts', MockProducts.getRouter())
//
app.use('/loggerTest', loggerTestRouter.getRouter())
app.use(errorMiddleware)
//

app.listen(PORT, () => logger.info(`Server on Port: ${PORT}`))















