import { MariaDB } from '../database';
import mybatisMapper  from 'mybatis-mapper'
import { Response } from 'express';

export default class Service {
    
    constructor(){
        mybatisMapper.createMapper([ './mapper/car.xml' ]);
    }
    public listAll( res: Response ){
        return MariaDB.instance.executeQuery('select * from ap_user1')
    }
}