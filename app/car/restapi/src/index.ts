//index.ts
import { config, logger } from './config'
import Server from './server'

const server = Server.init(config.SERVER_PORT)
server.start(()=>{logger.info(` server started  port :${config.SERVER_PORT}`)})