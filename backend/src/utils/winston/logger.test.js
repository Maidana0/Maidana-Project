import Router from "../../routes/router.js"
import logger from "./winston.js"
import { time } from "../utils.js"

const text = (request) => `Method: ${request.method} - ${time()}`

const testLogger = async (req, res, level) => {
    level(text(req))
    res.json({ loggerLevel: req.url, message: text(req) })
}

class LoggerTestRouter extends Router {
    init() {
        this.post('/fatal', (req, res) => testLogger(req, res, logger.fatal))
        this.post('/error', (req, res) => testLogger(req, res, logger.error))
        this.post('/warning', (req, res) => testLogger(req, res, logger.warning))
        this.post('/info', (req, res) => testLogger(req, res, logger.info))
        this.post('/http', (req, res) => testLogger(req, res, logger.http))
        this.post('/debug', (req, res) => testLogger(req, res, logger.debug))
    }
}

const loggerTestRouter = new LoggerTestRouter()
export default loggerTestRouter