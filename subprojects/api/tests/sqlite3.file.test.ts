import "reflect-metadata"
import { getConnectionManager, getConnection, Entity, getRepository, Connection } from 'typeorm';
import { PrimaryGeneratedColumn, Column } from "typeorm";
import { root } from '../config/paths';


@Entity()
export class MyEntity {
    @PrimaryGeneratedColumn()
    id?: number;

    @Column()
    name?: string;
}

beforeEach(async () => {
    const manager = getConnectionManager()
    const conn: Connection = manager.create({
        type: 'sqlite',
        name: 'default',
        database: `${root}/data/path.sqlite`,
        entities: [ MyEntity ],
        synchronize: true,
        dropSchema: true
    })
    return await conn.connect()
});

afterEach(() => {
    const conn = getConnection();
    return conn.close();
});

test("store Joe and fetch it", async () => {
    
    await getRepository(MyEntity).insert({
        name: "Joe"
    });
    const joe = await getRepository(MyEntity).find({
        where: {
            id: 1
        }
    });
    expect(joe[0].name).toBe("Joe");
});

test("store Another and fetch it", async () => {
    await getRepository(MyEntity).insert({
        name: "Another"
    });
    const joe = await getRepository(MyEntity).find({
        where: {
            id: 1
        }
    });
    expect(joe[0].name).toBe("Another");
});
