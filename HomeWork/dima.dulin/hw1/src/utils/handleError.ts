function handleError(message: string): never {
    throw new Error(message)
}

export default handleError
