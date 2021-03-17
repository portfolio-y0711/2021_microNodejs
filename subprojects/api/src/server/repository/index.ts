import { Connection } from "typeorm"
import { conn, Single } from "./conn"

class PathDB {
    conn
    constructor(conn: Single) {
       this.conn = conn
    }
    async getPath() {
        const db: Connection = await this.conn.getConnection()
        db
    }
}

const pathDB = new PathDB(conn)

export {
    pathDB
}