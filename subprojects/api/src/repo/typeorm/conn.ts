import { createConnection, Connection } from 'typeorm';
import { NODE_ENV, typeOrmConfigs } from './config'
import { Path } from './models/path.entity';
import path from 'path'
import fs from 'fs'
import { distroot } from '../../../config/paths';

class SingleConnection {
    conn: any
    createConnection: any
    self: SingleConnection
    config: any
    constructor(createConnection: any, conn: undefined) {
        this.conn = conn
        this.createConnection = createConnection
        this.self = this
    }
    async close() {
        if (!this.conn)  {
            await (this.conn as Connection).close()
        }
    }
    async getConnection() {
        if (!this.conn )  {
            this.conn = await this.createConnection(this.config || typeOrmConfigs[NODE_ENV])
            if (typeof(this.conn) === 'object' && this.conn.constructor.name === 'Connection') await this.self.seed()
            
        }
        // eslint-disable-next-line @typescript-eslint/no-unsafe-return
        return this.conn
    }
    async seed() {
        const data = fs.readFileSync(path.join(distroot, './data/files.json'), 'utf-8')
        const obj = JSON.parse(data)
        const arr = Object.entries(obj).reduce((acc, [_, val]) => {
            return [ ...acc, ...(val as [])]
        }, [])
        // eslint-disable-next-line @typescript-eslint/no-misused-promises
        await Promise.all((arr.map(async (e: any) => {
            return (this.conn as Connection).getRepository(Path).insert({  
                id: e.id,
                type: e.type,
                title: e.title,
                filepath: e.filepath || '',
                parent: e.parent
            })
        }) as Promise<any>[]))
    }
}

const createConn = (createConnection: any) => {
    let conn: any
    return new SingleConnection(createConnection, conn)
}

const conn = createConn(createConnection)

export {
    createConn,
    conn,
    SingleConnection as Single
}