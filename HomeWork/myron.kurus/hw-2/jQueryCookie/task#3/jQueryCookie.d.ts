interface JQueryCookieOptions {
    expires?: number,
    path?: string,
    domain?: string,
    secure?: boolean
}

interface JQueryCookieStatic {
    raw?: boolean;
    json?: boolean;

    (): {[key: string]: string};
    (name: string): any | undefined;
    (name: string, value: string): void;
    (name: string, value: string, options: JQueryCookieOptions): void;
    (name: string, value: any): void;
    (name: string, value: any, options: JQueryCookieOptions): void;
}

export interface JQueryCookie {
    cookie?: JQueryCookieStatic;
   
    removeCookie(name: string): boolean;
    removeCookie(name: string, options: JQueryCookieOptions): boolean;
}

declare const $: JQueryCookie;