interface jQueryCookieConfiguration {
    expires?: number,
    path?: string,
    domain?: string,
    secure?: boolean
}

interface jQueryCookieOptions {
    raw?: boolean;
    json?: boolean;
    defaults?: jQueryCookieConfiguration;

    (name:string): string | undefined;
    (name:string, value: string): void;
    (name: string, value: any): void;
    (name:string, value?: string, options?:jQueryCookieConfiguration): void;
}

export interface jQueryCookie {
    cookie: jQueryCookieOptions;

    removeCookie(key: string, options?: {path: string}): boolean | string;
}

declare const $: jQueryCookie;