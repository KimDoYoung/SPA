export default class CarController{
    private static _instance: CarController

    private constructor(){
        console.log('CarController intialize...')        
    }
    public static get instance():CarController {
        return this._instance || (this._instance = new this())
    }
    list(){

    }
    get(){

    }
    insert(){

    }
    update(){

    }
    delete(){
        
    }
}