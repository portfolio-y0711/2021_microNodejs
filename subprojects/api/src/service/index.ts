import { fileDB } from '../repo/filedb'
import { pathDB } from '../repo/typeorm'

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

const pathService = createPathService(pathDB)

export {
    pathService
}