import { Connection } from "typeorm"
import { conn, Single } from "./conn"
import { Path } from "./models/path.entity"

class PathDB {
    conn
    constructor(conn: Single) {
       this.conn = conn
    }
    async getPath(id: number) {
        const db: Connection = await this.conn.getConnection()
        const result = await db.getRepository(Path).find({
            where: {
                id: id
            }
        })
        return result
    }
}

const pathDB = new PathDB(conn)

export {
    pathDB
}