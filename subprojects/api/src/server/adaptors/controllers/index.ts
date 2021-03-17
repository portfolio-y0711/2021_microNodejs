import { Controller, Route, Get, Tags, Example, Path } from 'tsoa';
import { pathService } from '../../../service';

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
        return await pathService.getPath(id)
    } 
}
