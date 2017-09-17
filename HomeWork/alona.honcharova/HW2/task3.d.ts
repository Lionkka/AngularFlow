// Create d.ts file for jQueryCookie library
declare interface jQueryCookie {
    cookie: CookieOptions;
    cookie(name: string, value: any, options?: jQueryCookieOptions): void ;
    removeCookie(name: string, options?: jQueryCookieOptions): boolean;
}

interface jQueryCookieOptions{
    expires?: number,
    path?: string,
    domain?: string,
    secure?: boolean
}
interface CookieOptions{
    raw? : boolean;
    json? : boolean;
}