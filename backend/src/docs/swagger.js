import {__dirname} from '../utils/utils.js'
// SWAGGER
import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: "Maidana API",
            version: '1.0.0',
            description: 'This is a sample eccomerce Server based on the project for CoderHouse.',
            contact: {
                email: 'franco_maidana07@hotmail.com'
            }
        }
    },
    apis: [`${__dirname}/docs/**/*.yaml`]
}
const setup = swaggerJSDoc(options)

export default {
    ui: swaggerUi.serve,
    setup: swaggerUi.setup(setup)
}