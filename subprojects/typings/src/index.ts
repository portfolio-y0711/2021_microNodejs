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

export {
    IDirectory,
    IFile
}