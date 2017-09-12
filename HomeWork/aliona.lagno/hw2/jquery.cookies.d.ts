interface JQueryCookieOptions {
    expires?: any;
    path?: string;
    domain?: string;
    secure?: boolean;
}

interface JQueryCookieStatic {
    raw?: boolean;
    json?: boolean;

    (): {[key:string]: string};
    (name: string): string;
    (name: string, value: string): void;
    (name: string, value: string, options: JQueryCookieOptions): void;
}

interface JQueryCookie {
    cookie?: JQueryCookieStatic;

    removeCookie(name: string): boolean;
    removeCookie(name: string, path: JQueryCookieOptions): boolean;
}
