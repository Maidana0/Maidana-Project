import logger from "../../utils/winston/winston.js";
import { time } from "../../utils/utils.js";

const generateLog = (req, res, next) => {
    logger.info(`Method: ${req.method} - URL: ${req.url} - ${time()}`)
    next()
}
export default generateLog