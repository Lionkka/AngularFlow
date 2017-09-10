// Create d.ts file for jQueryCookie library
// based on https://github.com/carhartl/jquery-cookie
interface JQueryCookieOptions {
    expires?: any;
    path?: string;
    domain?: string;
    secure?: boolean;
}

interface JQueryCookieStatic {
    raw?: boolean;
    json?: boolean;

    (name: string): any;
    (name: string, value: string): void;
    (name: string, value: string, options: JQueryCookieOptions): void;
    (name: string, value: any): void;
    (name: string, value: any, options: JQueryCookieOptions): void;
}

interface JQueryStatic {
    cookie?: JQueryCookieStatic;

    removeCookie(name: string): boolean;
    removeCookie(name: string, options: JQueryCookieOptions): boolean;
}
