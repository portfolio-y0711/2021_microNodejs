import { fileDB } from '../repo/filedb'
import { pathDB } from '../repo/typeorm'

import { root } from '../../config/paths'
import * as path from 'path'
import * as fs from 'fs'

const createPathService = (db: any) => {
    const getPath = async(id: string) => {
        let result
        try {
            result = await db.getPath(id)
        } catch(e) {
            console.error('[!!!] production database is not running!, using cached filedb')
            result = await fileDB.getPath(id)
        }
        // eslint-disable-next-line @typescript-eslint/no-unsafe-return
        return result
    }
    return {
        getPath
    }
}

// service
const pathCacheService = (() => {
    const getPath = async(id: string) => {
        const data = fs.readFileSync(path.join(root, '../data/files.json'), 'utf-8')
        let queryString = ''
    
        switch(id) {
            case '0': 
                queryString = 'queryRoot'
                break
        default:
                queryString = `query${id}`
                break
        }
        return await new Promise(res => setTimeout(res, 1000, (JSON.parse(data)[`${queryString}`])))
    };
    return {
        getPath
    }
})()
//

const pathService = createPathService(pathDB)

export {
    pathService,
    pathCacheService
}