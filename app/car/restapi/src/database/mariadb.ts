import mariadb from 'mariadb'
import {config, logger} from '../config'

class MariaDB {
    private static _instance: MariaDB;
    private pool: mariadb.Pool;

    private constructor(){
        logger.debug('MariaDB class intialize....')
        // let config = {
        //     host : 'kalpa.iptime.org',
        //     user : 'kdy987',
        //     password : 'kalpa987',
        //     database : 'kalpadb',
        //     connectionLimit : 3
        // }
        this.pool = mariadb.createPool(config.MARIA_DB)
        // this.pool = mariadb.createPool({
        //     host : config.db.host,
        //     user : config.db.user,
        //     password : config.db.password,
        //     database : config.db.database,
        //     connectionLimit : config.db.connectionLimit
        // });
        this.dbConnect();
    }
    private async dbConnect() {
        try {            
            await this.pool.getConnection()
            logger.info('connection OK...')
        } catch (error) {
            logger.error(error)
        }
    }
    public static get instance(): MariaDB {
        if(!this._instance) {
            this._instance = new this()
        }
        return this._instance;
    }
    public async executeQuery(query: string){
        let conn: mariadb.Connection;
        conn = await this.pool.getConnection()
        try {
	        const rows = await conn.query(query);
            return rows;
        } catch (error) {
            logger.error(error)
            throw error;
        } finally {
            conn.end();
        }
    }
}

export default MariaDB