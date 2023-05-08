import ticketsService from "../services/tickets.service.js";
import CustomError from '../utils/error/CustomError.js'
import { ErrorsCause, ErrorsMessage, ErrorsName } from '../utils/error/errors.js'

class TicketController {

    async findTicketByOrder(req, res) {
        try {
            const { order } = req.body
            const ticket = await ticketsService.findTicketByOrder(order)
            req.json(ticket)

        } catch (error) {
            res.json({
                message: "Error",
                error
            })
        }
    }

    async generateTicket(req, res) {
        try {
            const { cid } = req.params
            const { email } = req.body

            const ticket = await ticketsService.generateTicket(cid, email)
            res.json(ticket)
        } catch (error) {
            CustomError.createCustomError({
                name: ErrorsName.PURCHASE_CART_ERROR, 
                message: ErrorsMessage.PURCHASE_CART_ERROR, 
                cause: ErrorsCause.PURCHASE_CART_ERROR
            })
        }
    }
}

const ticketController = new TicketController()
export default ticketController