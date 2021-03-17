import { ConnectionOptions } from 'typeorm'
import { Path } from './models/path.entity'
import { root } from '../../../config/paths'

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
        database: 'prod',
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