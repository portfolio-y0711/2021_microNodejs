import { fileDB } from "../repo/filedb"

const createPathService = (db: any) => {
    const getPath = async(id: string) => {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-return
        return await db.getPath(id)
    }
    return {
        getPath
    }
}

const pathService = createPathService(fileDB)

export {
    pathService
}