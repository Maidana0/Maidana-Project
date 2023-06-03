import mongoose from 'mongoose'
import { time } from '../../../utils/utils.js'

const chatSchema = new mongoose.Schema({
    user:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    message:{
        type: String,
        required: true,
    },
    datetime: {
        type: Object,
        require: true,
        default: time()
    },
})

export const chatModel = mongoose.model('chat', chatSchema)