import cluster from 'cluster'
import { cpus } from 'os'

import { DBConnect } from "./persistence/mongoDB/dbConfig.js"
import { socketServer } from "./socket.js";
import useRoutes from "./routes/use.router.js";
// import './config.js';
import express from 'express';
import compression from 'express-compression'
import cors from 'cors'

import { __dirname } from './utils/utils.js'
import { errorMiddleware } from "./utils/error/error.midleware.js";

import cookieParser from 'cookie-parser';
import session from 'express-session';
import MongoStore from 'connect-mongo';
import config from './config.js'
const { mongo_uri: mongoUrl, mongo_secret: secret, port: PORT } = config

import passport from 'passport';
import './routes/middlewares/passport.js'

import generateLog from "./routes/middlewares/winston.middleware.js";
import logger from "./utils/winston/winston.js";


if (cluster.isPrimary) {
    for (let i = 0; i < cpus().length; i++) {
        cluster.fork()
    }
    cluster.on('disconnect', () => cluster.fork())
} else {
    const app = express()

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
    /*Rutas - Callbacks*/ useRoutes(app)

    app.use(errorMiddleware)



    const httpServer = app.listen(PORT, () => logger.http(`Server on Port: ${PORT} - Worker:${process.pid}`))
    DBConnect.getInstance()
    socketServer(httpServer)

}



