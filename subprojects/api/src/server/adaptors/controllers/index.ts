import { Controller, Route, Get, Tags, Example, Path } from 'tsoa';
import * as path from 'path'
import * as fs from 'fs'

@Route('path')
@Tags('Path Controller')
export class PathController extends Controller {
    @Get('{id}')
    @Example<{ id: string }>({
        id: '0'
    })
    public async getPath(
        @Path() id: string
    ): Promise<any> {

        // service
        const data = fs.readFileSync(path.join(__dirname, '../../../../src/server/data/files.json'), 'utf-8')
        let queryString = ''

        switch(id) {
            case '0': 
                queryString = 'queryRoot'
                break
            default:
                queryString = `query${id}`
                break
        }
        const result = await new Promise(res => setTimeout(res, 1000, (JSON.parse(data)[`${queryString}`])))
        //

        return result
    } 
}
