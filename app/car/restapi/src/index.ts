//index.ts
// import app from './app'
// import config from './config/config'

// console.log('********************************************')
// console.log('hello car app')
// console.log('********************************************')
// const port: number = config.port;

// app.listen( port, () => {
//     console.log(`running car at http://localhost:${port}`);
// });
import config from './config/config'
import Server from './server'
import {CarRouter} from './router'

const server = Server.init(config.port)
server.app.use('/car', CarRouter);

server.start(()=>{console.log(`port :${config.port}`)})