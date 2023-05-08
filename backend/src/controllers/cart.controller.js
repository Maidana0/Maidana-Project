import cartsService from "../services/carts.service.js"

import CustomError from '../utils/error/CustomError.js'

import { ErrorsCause, ErrorsMessage, ErrorsName } from '../utils/error/errors.js'


class CartController {
    getAllCarts = async (req, res) => {
        try {
            const carts = await cartsService.getAll()
            res.json({
                message: "Todos los carritos",
                carts
            })
        } catch (error) {
            CustomError.createCustomError({
                name: ErrorsName.GET_CARTS_ERROR,
                message: ErrorsMessage.GET_CARTS_ERROR,
                cause: ErrorsCause.GET_CARTS_ERROR
            })

        }
    }
    getOneCart = async (req, res) => {
        try {
            const idCart = req.params.cid
            const cart = await cartsService.getOne(idCart)
            res.json({
                message: `Carrito con el id ${idCart}`,
                cart
            })
        } catch (error) {
            CustomError.createCustomError({
                name: ErrorsName.GET_CART_ID_ERROR,
                message: ErrorsMessage.GET_CART_ID_ERROR,
                cause: ErrorsCause.GET_CART_ID_ERROR
            })
        }
    }
    addCart = async (req, res) => {
        try {
            const newCart = await cartsService.add()
            res.json({
                message: 'Carrito creado con exito!',
                newCart
            })
        } catch (error) {
            CustomError.createCustomError({
                name: ErrorsName.ADD_CART_ERROR,
                message: ErrorsMessage.ADD_CART_ERROR,
                cause: ErrorsCause.ADD_CART_ERROR
            })
        }
    }
    addProductToCart = async (req, res) => {
        try {
            const { cid, pid } = req.params
            const cart = await cartsService.addProduct(cid, pid)

            res.json({
                message: 'Producto agregado!',
                cart
            })
        } catch (error) {
            CustomError.createCustomError({
                name: ErrorsName.ADD_PROD_TO_CART_ERROR,
                message: ErrorsMessage.ADD_PROD_TO_CART_ERROR,
                cause: ErrorsCause.ADD_PROD_TO_CART_ERROR
            })
        }
    }
    updateProductQuantity = async (req, res) => {
        try {
            const { cid, pid } = req.params
            const { quantity } = req.body
            const cart = await cartsService.updateQuantity(cid, pid, quantity)
            res.json({
                message: 'Producto actualizado con exito!',
                cart
            })
        } catch (error) {
            CustomError.createCustomError({
                name: ErrorsName.UPDATE_PRODS_QUANTITY_ERROR, 
                message: ErrorsMessage.UPDATE_PRODS_QUANTITY_ERROR, 
                cause: ErrorsCause.UPDATE_PRODS_QUANTITY_ERROR
            })
        }
    }
    updateCart = async (req, res) => {
        try {
            const { cid } = req.params
            const { products } = req.body
            const cart = await cartsService.update(cid, products)
            res.json({
                message: 'Carrito actualizado!',
                cart
            })
        } catch (error) {
            res.json({
                message: "Error",
                error
            })
        }
    }
    deleteProductInCart = async (req, res) => {
        try {
            const { cid, pid } = req.params
            const cart = await cartsService.deleteOneProduct(cid, pid)
            res.json({
                message: 'Producto eliminado del carrito!',
                cart
            })
        } catch (error) {
            CustomError.createCustomError({
                name: ErrorsName.DEL_PROD_FROM_CART_ERROR, 
                message: ErrorsMessage.DEL_PROD_FROM_CART_ERROR, 
                cause: ErrorsCause.DEL_PROD_FROM_CART_ERROR
            })
        }
    }
    deleteAllProductsInCart = async (req, res) => {
        try {
            const { cid } = req.params
            const cart = await cartsService.deleteAllProducts(cid)
            res.json({
                message: 'Carrito vaciado con exito',
                cart
            })
        } catch (error) {
            CustomError.createCustomError({
                name: ErrorsName.EMPTY_CART_ERROR, 
                message: ErrorsMessage.EMPTY_CART_ERROR, 
                cause: ErrorsCause.EMPTY_CART_ERROR
            })
        }
    }
}

const cartController = new CartController()
export default cartController