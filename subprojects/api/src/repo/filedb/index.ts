import * as path from 'path'
import * as fs from 'fs'
import { root, distroot } from '../../../config/paths';

const fileDB = (() => {
    const getPath = async(id: string) => {
        const data = fs.readFileSync(path.join(distroot, './data/files.json'), 'utf-8')
        let queryString = ''

        switch(id) {
            case '0': 
                queryString = 'queryRoot'
                break
            default:
                queryString = `query${id}`
                break
        }
        return await new Promise(res => setTimeout(res, 1000, (JSON.parse(data)[`${queryString}`])))
    }
    return {
        getPath 
    }
})()

export {
    fileDB
}