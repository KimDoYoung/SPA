import * as dotenv from 'dotenv'
import path from 'path'
import logger from './logger'

dotenv.config({
    path : path.resolve(
        (process.env.NODE_ENV == 'production' ? '.production.env' : '.development.env')
    )
})
// port  = parseInt( process.env.SERVER_PORT, 10);
logger.info('NODE_ENV : [' + process.env.NODE_ENV  +']')
const config = {
    SERVER_PORT : parseInt( process.env.SERVER_PORT || '3000', 10 ), 
    MARIA_DB : {
        host : process.env.MARIA_HOST,
        user : process.env.MARIA_USER,
        port : parseInt(process.env.MARIA_PORT || '3306', 10),
        password : process.env.MARIA_PASSWORD,
        database : process.env.MARIA_DATABASE,
        connectionLimit : 5
    },
    pageSize : 10,
    JWT_SECRET_KEY: process.env.JWT_SECRET_KEY,
    FILE_BASE_FOLDER:process.env.FILE_BASE_FOLDER,
    FILE_VIRTURL_NAME:process.env.FILE_VIRTURL_NAME
};

export default config;