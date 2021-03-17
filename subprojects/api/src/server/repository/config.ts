import { ConnectionOptions } from 'typeorm'
import { Path } from './models/path.entity'

const options: ConnectionOptions = {
    type: 'sqlite',
    name: 'typeorm-test',
    database: ':memory:',
    entities: [
        Path
    ],
    logging: true,
    dropSchema: true,
    synchronize: true
}

export {
    options
}