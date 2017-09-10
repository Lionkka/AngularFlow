/**
 * Create d.ts file for jQueryCookie library
 */

interface jQueryCookieOptions {
    expires?: number,
    path?: string,
    domain?: string,
    secure?: boolean
}

interface jQueryCookieStatic {
    raw?: boolean;
    json?: boolean;
    defaults?: jQueryCookieOptions;

    (name:string): string | undefined;
    (name:string, value: string): void;
    (name: string, value: any): void;
    (name:string, value?: string, options?:jQueryCookieOptions): void;
}

export interface jQueryCookie {
    cookie: jQueryCookieStatic;

    removeCookie(key: string, options?: {path: string}): boolean | string;
}

declare const $: jQueryCookie;