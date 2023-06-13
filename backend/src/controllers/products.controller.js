import productsService from '../services/products.service.js'

import CustomError from '../utils/error/CustomError.js'

import { ErrorsCause, ErrorsMessage, ErrorsName } from '../utils/error/errors.js'



class ProductsController {
    getProducts = async (req, res) => {
        try {
            const { limit, page, query, sort } = await req.query
            const products = await productsService.getAll(limit, page, query, sort)
            res.json({
                message: "Lista de productos",
                products
            }).status(200)
        } catch (error) {
            CustomError.createCustomError({
                name: ErrorsName.GET_PRODUCTS_ERROR, 
                message: ErrorsMessage.GET_PRODUCTS_ERROR, 
                cause: ErrorsCause.GET_PRODUCTS_ERROR
            })
        }
    }

    getProductById = async (req, res) => {
        try {
            const { pid } = req.params
            const product = await productsService.getOne(pid)
            res.json(product).status(200)
        } catch (error) {
            CustomError.createCustomError({
                name: ErrorsName.GET_PRODUCT_ID_ERROR, 
                message: ErrorsMessage.GET_PRODUCT_ID_ERROR, 
                cause: ErrorsCause.GET_PRODUCT_ID_ERROR
            })
        }
    }

    addProduct = async (req, res) => {
        try {
            const product = req.body
            const addedProduct = await productsService.add(product)
            res.json({
                message: "Producto agregado!",
                addedProduct
            }).status(200)
        } catch (error) {
            CustomError.createCustomError({
                name: ErrorsName.ADD_PRODUCT_ERROR, 
                message: ErrorsMessage.ADD_PRODUCT_ERROR, 
                cause: ErrorsCause.ADD_PRODUCT_ERROR
            })
        }
    }

    updateProduct = async (req, res) => {
        try {
            const { pid } = req.params
            const product = req.body
            const updateProduct = await productsService.update(pid, product)
            res.json({
                message: "Producto actualizado!",
                updateProduct
            }).status(200)
        } catch (error) {
            CustomError.createCustomError({
                name: ErrorsName.UPDATE_PRODUCT_ERROR, 
                message: ErrorsMessage.UPDATE_PRODUCT_ERROR, 
                cause: ErrorsCause.UPDATE_PRODUCT_ERROR
            })
        }
    }

    deleteProduct = async (req, res) => {
        try {
            const { pid } = req.params
            const productDeleted = await productsService.deleteOne(pid)
            res.json({
                message: "Producto eliminado!",
                productDeleted
            }).status(200)
        } catch (error) {
            CustomError.createCustomError({
                name: ErrorsName.DELETE_PRODUCT_ERROR, 
                message: ErrorsMessage.DELETE_PRODUCT_ERROR, 
                cause: ErrorsCause.DELETE_PRODUCT_ERROR
            })
        }
    }
}


const productsController = new ProductsController()
export default productsController