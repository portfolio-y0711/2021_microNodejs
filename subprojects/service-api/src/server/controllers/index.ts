import { pathService, pathCacheService } from "../../service"
import { asyncHandler } from "./handler.async"

const createPathController = (({ service, cacheService }: { service: any, cacheService: any}) => {
    // eslint-disable-next-line @typescript-eslint/require-await
    const getPathHandler = async(httpRequest: any) => {
        const { id } = httpRequest.params
        // eslint-disable-next-line @typescript-eslint/no-unsafe-return
        let result 
        try {
            result = await service.getPath(id)
        } catch(e) {
            console.error(e)
            console.error('--------------------------------------------------------------')
            console.error('[!!!] production database is not running!, using cached filedb')
            result = await cacheService.getPath(id)
        }
        const httpResponse = {
            headers: {
                "Content-Type": "application/json"
            },
            statusCode: 200,
            body: result
        }
        return httpResponse
    }
    const getPath = asyncHandler(getPathHandler)
    return {
        getPath
    }
})

const pathController = createPathController({
    service: pathService,
    cacheService: pathCacheService
})

export {
    pathController
}