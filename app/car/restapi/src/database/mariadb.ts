import mariadb from 'mariadb'
import config from '../config/config'

class MariaDB {
    private static _instance: MariaDB;
    private pool: mariadb.Pool;

    private constructor(){
        console.log('MariaDB class intialize....')
        this.pool = mariadb.createPool({
            host : config.db.host,
            user : config.db.user,
            password : config.db.password,
            database : config.db.database,
            connectionLimit : config.db.connectionLimit
        });
        this.dbConnect();
    }
    private dbConnect(): void{
        try {            
            this.pool.getConnection()
            console.log('connection OK...')
        } catch (error) {
            console.error(error)
        }
    }
    public static get instance(): MariaDB {
        if(!this._instance) {
            this._instance = new this()
        }
        return this._instance;
    }
    public static async executeQuery(query: string){
        let conn: mariadb.Connection;
        try {
            conn = await this.instance.pool.getConnection();
	        const rows = await conn.query("SELECT 1 as val");
            return rows;
        } catch (error) {
            throw error;
        } finally {
           // conn.destroy;
        }
    }
}

export default MariaDB