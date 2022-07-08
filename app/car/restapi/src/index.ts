//index.ts
import Config from './config/config'
import Server from './server'
import {CarRouter} from './router'

//Server생성
const server = Server.init(Config.port)

//Router설정
server.app.use('/car', CarRouter);

server.start(()=>{console.log(`port :${Config.port}`)})