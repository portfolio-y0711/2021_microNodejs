import registry from "../../service"

const createRegistryController = (registry: any) => {
    const register = (req: any, res: any) => {
        return 
    }
    const unregister = (req: any, res: any) => {
        return 
    }
    const get = (req: any, res: any) => {
        const { srvnm: service_name, srver: service_version, srvprt: service_port } = req.params
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
