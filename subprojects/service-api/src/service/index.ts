import { fileDB } from '../repo/filedb'
import { pathDB } from '../repo/typeorm'
import { IPathDB } from '@micro/typings';

// persistence service
const createPathService = (db: IPathDB) => {
    const getPath = async(id: string) => 
        // eslint-disable-next-line @typescript-eslint/no-unsafe-return
        await db.getPath(id)
    return {
        getPath
    }
}

// cached service
const createPathCacheService = (db: IPathDB) => {
    const getPath = async(id: string) => 
        // eslint-disable-next-line @typescript-eslint/no-unsafe-return
        await db.getPath(id)
    return {
        getPath
    }
}
//

const pathService = createPathService(pathDB)
const pathCacheService = createPathCacheService(fileDB)

export {
    pathService,
    pathCacheService
}