import mongoose from 'mongoose'
import config from "../../config.js"
import logger from '../../utils/winston/winston.js'

export class DBConnect {
    static #instance

    constructor() {
        mongoose.connect(config.mongo_uri)
        mongoose.set('strictQuery', true)
    }

    static getInstance() {
        if (this.#instance) return this.#instance
        else {
            this.#instance = new DBConnect()
            logger.http('Conectado con exito a la base de datos')
            return this.#instance
        }
    }

}

