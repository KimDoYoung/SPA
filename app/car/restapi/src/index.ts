//index.ts
import Config from './config/config'
import Server from './server'

const server = Server.init(Config.SERVER_PORT)
server.start(()=>{console.log(`port :${Config.SERVER_PORT}`)})