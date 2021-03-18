import { conn } from '../src/repo/typeorm/conn'
import { Connection } from 'typeorm';
import { Path } from '../src/repo/typeorm/models/path.entity'

describe('Typeorm path entity', () => {
    it('insert', async() => {
        const db: Connection = await conn.getConnection()
        await db.getRepository(Path).insert({
            type: 'DIRECTORY',
            title: 'monorepo',
            filepath: '',
            parent: 0
        })
        const dirs = await db.getRepository(Path).find({
            where: {
                title: 'monorepo'
            }
        })
        expect(dirs[0].type).toBe('DIRECTORY')
    })
})