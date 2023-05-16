import winston from "winston"
import config from "../../config.js"

const myCustomLevels = {
    levels: {
        fatal: 0,
        error: 1,
        warning: 2,
        info: 3,
        http: 4,
        debug: 5
    },
    colors: {
        fatal: 'bold gray redBG',
        warning: 'bold black yellowBG'
    }
}
winston.addColors(myCustomLevels.colors);

// TENGO QUE DARLE COLOR A CADA NIVEL
const transportsConsole = (level) => new winston.transports.Console({
    level: level,
    format: winston.format.combine(
        winston.format.colorize(),
        winston.format.simple()
    )
})
const transportsFile = (level) => new winston.transports.File({
    level: level,
    filename: "./errors.log",
    format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.prettyPrint()
    )
})

const mode = () => config.mode == "development" ? transportsConsole("debug") : transportsConsole("info")


const logger = winston.createLogger({
    levels: myCustomLevels.levels,
    transports: [
        mode(),
        transportsFile("error")
    ],
})


export default logger