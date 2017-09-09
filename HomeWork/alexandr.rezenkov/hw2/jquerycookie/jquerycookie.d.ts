export interface jQueryCookie {
    raw: boolean;
    json: boolean;
    removeCookie(Key: string, Path?: { path: string }): boolean;
    cookie(Key?: string, options?: { expires: number, path: string, domain: string, secure: boolean, encode: (ket:string) => void }): string | Object;
}