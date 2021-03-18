import dotenv from 'dotenv'
import path from 'path';
import { distroot } from '../config/paths';

describe('Mysql', () => {
    it('', () => {
        dotenv.config({ path: path.join(distroot, './.docker/.env')})
    })
})