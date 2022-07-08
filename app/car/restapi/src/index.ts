//index.ts
import Config from './config/config'
import Server from './server'

const server = Server.init(Config.port)
server.start(()=>{console.log(`port :${Config.port}`)})