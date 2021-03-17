import { createConn } from '../src/server/repository/conn'

describe('conn object', () => {
    describe('guarantees that is create singleton typeorm connection', () => {
        const createConnection = () => Math.random()

        it('createConnection return a different value', () => {
            expect(createConnection()).not.toEqual(createConnection())
        })

        it('conn return same value on invocation of getConnection', async() => {
            const conn = createConn(createConnection)
            expect(await conn.getConnection()).toEqual(await conn.getConnection())
        })

        it('getConnection will be invoked once', async() => {
            const createConnection = jest.fn().mockImplementation(() => Math.random())
            const conn = createConn(createConnection)
            await conn.getConnection()
            await conn.getConnection()
            await conn.getConnection()
            expect(createConnection).toBeCalledTimes(1)
        })
    })
})