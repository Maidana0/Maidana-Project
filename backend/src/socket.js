import { Server } from 'socket.io'
import logger from './utils/winston/winston.js'
import { chatModel } from './persistence/mongoDB/models/chatMongo.js'

class SocketServer {
    static #instance
    constructor(server) {
        return new Server(server, { cors: { origin: 'http://localhost:3000' } })
    }
    static getInstance(server) {
        if (this.#instance) return this.#instance

        else {
            this.#instance = new SocketServer(server)
            logger.http('Conectado con exito al server socket')
            return this.#instance
        }
    }
}


export const socketServer = async (server) => {
    const io = await SocketServer.getInstance(server)

    io.on('connection', async (socket) => {
        const chat = await chatModel.find({})
        socket.emit('server:chat', chat)
        
        socket.on('client:connection', () => {
            socket.emit('server:chat', chat)
        })

        socket.on('client:newMessage', async (obj) => {
            await chatModel.create(obj)
            const chat = await chatModel.find({})
            io.emit('server:chat', chat)
        })

    })
}