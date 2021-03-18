import { ConnectionOptions } from 'typeorm'
import { Path } from './models/path.entity'
import { distroot, root } from '../../../config/paths'
import dotenv from 'dotenv'
import path from 'path';

dotenv.config({ path: path.join(distroot, './.docker/.env')})

const options: ConnectionOptions = {
    type: 'sqlite',
    name: 'typeorm-test',
    database: ':memory:',
    entities: [
        Path
    ],
    logging: false,
    dropSchema: true,
    synchronize: true
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const typeOrmConfigs: { [name: string]: ConnectionOptions } = {
    production: {
        type: 'mysql',
        name: 'default',
        username: process.env.MYSQL_USER,
        password: process.env.MYSQL_PASSWORD,
        database: process.env.MYSQL_DATABASE,
        port: Number(process.env.MYSQL_PORT),
        entities: [
            Path
        ],
        logging: false,
        dropSchema: true,
        synchronize: true

    },
    development: {
        type: 'sqlite',
        name: 'default',
        database: `${root}/data/path.sqlite`,
        entities: [
            Path
        ],
        logging: false,
        dropSchema: true,
        synchronize: true
    },
    test: {
        type: 'sqlite',
        name: 'default',
        database: ':memory:',
        entities: [
            Path
        ],
        logging: false,
        dropSchema: true,
        synchronize: true
    }
}

export {
    typeOrmConfigs,
    options
}