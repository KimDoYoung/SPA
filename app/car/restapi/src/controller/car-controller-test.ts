import express, { Request, Response, NextFunction } from 'express';
import { Service } from '../service';
import { SqlParams, ResMessage } from '../types'
import {logger} from '../config'
import ControllerBase  from './controllerbase'
import assert from 'assert'
//import CarData from '../data/car-data.json'
import { CarData, Car} from '../data'

export default class CarController extends ControllerBase {
    private static _instance: CarController
    private carList: Array<Car>
    private constructor(){
        super()
        this.carList = CarData
        console.log("CarList:" + CarData)
        logger.debug('CarController intialize...')        
    }
    public static get instance():CarController {
        return this._instance || (this._instance = new this())
    }
    public async list(req: Request, res: Response , next: NextFunction){
        logger.debug('get /car/list')
        console.log(CarData)
        let result = {
            list : CarData,
            totalCount : CarData.length
        }
        res.status(200).json( ResMessage.success('OK', result) );
    }
    public get(req: Request, res: Response , next: NextFunction){
        logger.debug('get /car/id')
        // let carData = this.carList;
        //let carData = CarData
        let id = parseInt(req.params.id, 10);
        let found = CarData.find(car => car.id === id)
        logger.debug(`id:${id}, found: ${found}`)
        if(found){
             res.status(200).json(ResMessage.success('OK', found))
        }else{     
             res.status(500).json(ResMessage.fail(400, 'not found'))
        }     
    }
    public insert(req: Request, res: Response , next: NextFunction){
        let validCheck = super.validationCheck(req, 'car-insert');
        if(validCheck.pass == false){
            res.status(400).json( ResMessage.fail(400, validCheck.message) )
            return
        }
        let {ymd, event_cd, event_nm} = req.body
        let id = CarData.length
        CarData.push({id:id, ymd:ymd, event_cd:event_cd, event_nm: event_nm})
        res.status(200).json(ResMessage.success('OK', {effectedRecordCount:1} ))
    }

    public update(req: Request, res: Response , next: NextFunction){
        logger.debug('patch /car/:id')
        let id = parseInt(req.params.id, 10)
        let validCheck = super.validationCheck(req, 'car-insert');
        if(validCheck.pass == false){
            res.status(400).json( ResMessage.fail(400, validCheck.message) )
            return
        }
        let {ymd, event_cd, event_nm} = req.body
        let found=CarData.find(car=>car.id === id)
        if(found){
            found.ymd = ymd
            found.event_cd = event_cd
            found.event_nm = event_nm
            res.status(200).json(ResMessage.success('OK', {effectedRecordCount:1}))
        }else{
            res.status(200).json(ResMessage.success('OK', {effectedRecordCount:0}))
        }
    }
    public delete(req: Request, res: Response , next: NextFunction){
        let id = parseInt(req.params.id, 10);
        let foundIndex = CarData.findIndex(car=>car.id === id)
        if(foundIndex > -1){
            CarData.splice(foundIndex, 1)
            res.status(200).json(ResMessage.success('OK', {effectedRecordCount:1}))
        }else{
            res.status(200).json(ResMessage.success('OK', {effectedRecordCount:0}))
        }

    }
}