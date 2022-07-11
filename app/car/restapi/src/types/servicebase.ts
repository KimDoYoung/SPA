import path from 'path'
import fs from 'fs'
import mybatisMapper from 'mybatis-mapper';
import SqlParams from './sqlparams'

interface SqlId {
    namespace : string,
    id : string
}
class ServiceBase {
    private mapperFolder = '../mapper'
    
    constructor(){
        this.loadingXml()
    }

    protected parseSqlId(sqlIdString : string ): SqlId {
        let array:string[] = sqlIdString.split('.')
        let sqlId: SqlId = {namespace:array[0], id: array[1]}
        return sqlId
    }
    protected loadingXml():void{
        const dir = path.join(__dirname, this.mapperFolder);
        console.log('dir: ', dir)
        let xmlFiles:string[] = []
        const files = fs.readdirSync(dir)
        xmlFiles = files.filter(file => path.extname(file) === '.xml')
                        .map(item=>path.resolve(dir+'/'+item))
        console.log(xmlFiles)
        mybatisMapper.createMapper( xmlFiles );
    }
    protected getSqlStatement(sqlIdStr: string, sqlParams: SqlParams): string {
        let sqlId = this.parseSqlId(sqlIdStr)
        let namespace = sqlId.namespace
        let id = sqlId.id
        return mybatisMapper.getStatement(namespace, id, sqlParams, {
            language: 'sql',
            indent: '  ',
        })
    }
}
export default ServiceBase;