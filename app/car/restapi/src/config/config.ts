import * as dotenv from 'dotenv'
import path from 'path'

dotenv.config({
    path : path.resolve(
        (process.env.NODE_ENV == 'production' ? '.production.env' : '.development.env')
    )
})
// port  = parseInt( process.env.SERVER_PORT, 10);
console.log('SERVER_PORT : ', process.env.SERVER_PORT )
console.log('MARIA_DATABASE : ', process.env.MARIA_DATABASE )
const 
config = {
    port : parseInt( process.env.SERVER_PORT || '3000', 10 ), 
    db : {
        host : process.env.MARIA_HOST,
        port : process.env.MARIA_PORT,
        user : process.env.MARIA_USER,
        password : process.env.MARIA_PASSWORD,
        database : process.env.MARIA_DATABASE,
        connectionLimit : 5
    },
    pageSize : 10,
};
export default config;