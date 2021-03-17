import { Connection } from "typeorm"
import { conn, Single } from "./conn"
import { Path } from "./models/path.entity"
import { IPathDB } from '@clean/typings';

class PathDB implements IPathDB{
    conn
    constructor(conn: Single) {
       this.conn = conn
    }
    async getPath(id: string) {
        const db: Connection = await this.conn.getConnection()
        const result = await db.getRepository(Path).find({
            where: {
                parent: id
            }
        })
        return result
    }
}

const pathDB = new PathDB(conn)

export {
    pathDB
}