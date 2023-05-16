import mongoose from 'mongoose'
import { time } from '../../../utils/utils.js'


const ticketsSchema = new mongoose.Schema({
    code: {
        unique: true,
        type: String,
        require: true
    },
    purchase_datetime: {
        type: String,
        require: true,
        default: time()
    },
    amount: {
        type: Number,
        require: true
    },
    purchaser: {
        type: String,
        require: true
    },
    products: {
        type: Array
    }
    // cart: [
    //     {
    //         type: mongoose.SchemaTypes.ObjectId,
    //         ref: 'carts'
    //     }
    // ]
})
// ticketsSchema.pre('find', function (next) {
//     this.populate('carts')
//     next()
// })

export const ticketsModel = mongoose.model('tickets', ticketsSchema)