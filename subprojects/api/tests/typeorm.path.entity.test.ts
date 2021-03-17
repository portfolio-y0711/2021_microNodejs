import { conn } from '../src/server/repository/conn'
import { Connection } from 'typeorm';
import { Path } from '../src/server/repository/models/path.entity'

describe('Typeorm path entity', () => {
    it('', async() => {
        const db: Connection = await conn.getConnection()
        await db.getRepository(Path).insert({
            type: 'DIRECTORY',
            title: 'monorepo',
            filepath: '',
            parent: 0
        })
        const dir = await db.getRepository(Path) .find({
            where: {
                title: 'monorepo'
            }
        })
        expect(dir[0].type).toBe('DIRECTORY')
    })
})