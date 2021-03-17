import { fileDB } from '../repo/filedb'
import { pathDB } from '../repo/typeorm'

const createPathService = (db: any) => {
    const getPath = async(id: string) => {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-return
        return await db.getPath(id)
    }
    return {
        getPath
    }
}

const pathService = createPathService(pathDB)

export {
    pathService
}