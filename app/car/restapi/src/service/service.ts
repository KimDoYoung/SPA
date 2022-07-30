import mariadb from 'mariadb';
// import { MariaDB } from '../database';
import { SqlParams } from '../types';
import { logger, config } from '../config';
import ServiceBase from './servicebase';

export default class Service extends ServiceBase {
    private static _instance: Service;
    private pool: mariadb.Pool;
    private constructor() {
        super();
        this.pool = mariadb.createPool(config.MARIA_DB);
    }
    public static get instance(): Service {
        return this._instance || (this._instance = new this());
    }
    public getConnection() {
        return this.pool.getConnection();
    }
    public async executeQuery(query: string) {
        let conn: mariadb.Connection;
        conn = await this.getConnection();
        try {
            const rows = await conn.query(query);
            return rows;
        } catch (error) {
            logger.error(error);
            throw error;
        } finally {
            conn.end();
        }
    }
    public execute(sqlId: string, sqlParams: SqlParams) {
        try {
            if (sqlId.startsWith('test')) {
                return new Promise((resolve, reject) => {
                    setTimeout(() => {
                        resolve('OK...' + new Date());
                    }, 3000);
                });
            }
            let sql = super.getSqlStatement(sqlId, sqlParams);
            logger.debug('sql:[' + sql + ']');
            return this.executeQuery(sql);
        } catch (error) {
            logger.error(error);
            return new Promise((resolve, reject) => {
                reject(new Error('error sqlId: ' + sqlId));
            });
        }
    }
}
