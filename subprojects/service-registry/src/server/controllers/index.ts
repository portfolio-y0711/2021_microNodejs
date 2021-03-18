import registry from "../../service"

const createRegistryController = (registry: any) => {
    const register = (req: any, res: any) => {
        return 
    }
    const unregister = (req: any, res: any) => {
        return 
    }
    const get = (req: any, res: any) => {
        return 
    }
    return {
        get,
        register,
        unregister
    }
}
const registryController = createRegistryController(registry)

export default registryController
