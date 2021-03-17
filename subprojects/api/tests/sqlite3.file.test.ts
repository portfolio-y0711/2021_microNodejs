import "reflect-metadata"
import { createConnection, Entity, getRepository, Connection, getConnectionManager } from 'typeorm';
import { PrimaryGeneratedColumn, Column } from "typeorm";
import { root } from '../config/paths';


@Entity()
export class MyEntity {
    @PrimaryGeneratedColumn()
    id?: number;

    @Column()
    name?: string;
}

test("store Joe and fetch it", async () => {
    const manager = getConnectionManager()
    const conn: Connection = manager.create({
        type: 'sqlite',
        name: 'default',
        database: `${root}/data/path.sqlite`,
        entities: [ MyEntity ],
        synchronize: true,
        dropSchema: true
    })
    await conn.connect()
    // const conn: Connection = await createConnection({
    //     type: 'sqlite',
    //     name: 'default',
    //     database: `${root}/data/path.sqlite`,
    //     entities: [ MyEntity ],
    //     synchronize: true,
    //     dropSchema: true
    // });
    
    await conn.getRepository(MyEntity).insert({
        name: "Joe"
    });
    const joe = await getRepository(MyEntity).find({
        where: {
            id: 1
        }
    });
    expect(joe[0].name).toBe("Joe");
    await conn.close()
});

test.skip("store Another and fetch it", async () => {
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


