import { createConnection } from 'typeorm'
import { options } from './config'

class Single {
    conn: any
    createConnection: any
    self: Single
    constructor(createConnection: any, conn: unknown) {
        this.conn = conn
        this.createConnection = createConnection
        this.self = this
    }
    async getConnection() {
        if (!this.conn)  {
            this.conn = await this.createConnection(options)
        }
        // eslint-disable-next-line @typescript-eslint/no-unsafe-return
        return this.conn
    }
}

const createConn = (createConnection: any) => {
    let conn: any
    return new Single(createConnection, conn)
}

const conn = createConn(createConnection)

export {
    createConn,
    conn,
    Single
}