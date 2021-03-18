import { pathCacheService } from "../../service"
import { asyncHandler } from "./handler.async"

const createPathController = ((service: any) => {
    // eslint-disable-next-line @typescript-eslint/require-await
    const getPathHandler = async(httpRequest: any) => {
        const { id } = httpRequest.params
        // eslint-disable-next-line @typescript-eslint/no-unsafe-return
        let result 
        try {
            result = await service.getPath(id)
        } catch(e) {
            console.log(e)
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

const pathController = createPathController(pathCacheService)

export {
    pathController
}