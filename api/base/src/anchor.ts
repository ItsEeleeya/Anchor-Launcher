function hello(): string {
    return "Hello 👋! from base"
}

type Identifier = {
    namespace: string,
    path: string
}

export {
    hello,
    Identifier
}