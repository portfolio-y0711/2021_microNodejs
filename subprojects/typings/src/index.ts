interface IDirectory {
    id: number
    type: string
    title: string
    filepath: string | null
    parent: number
}

interface IFile {
    id: number
    type: string
    title: string
    filepath: string
    parent: number
}

interface IPathDB {
    getPath: (id: string) => Promise<unknown>
}

export {
    IDirectory,
    IFile,
    IPathDB
}