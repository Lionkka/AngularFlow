export interface JQueryCookieOptions {
    expires?: any;
    path?: string;
    domain?: string;
    secure?: boolean;
}

export interface JQueryCookieStatic {
    raw?: boolean;
    json?: boolean;
    defaults?: JQueryCookieOptions;

    (name: string): any;
    (name: string, value: string): void;
    (name: string, value: any): void;
    (name: string, value: string, options: JQueryCookieOptions): void;    
    (name: string, value: any, options: JQueryCookieOptions): void;
}

export interface JQueryStatic {   
    cookie?: JQueryCookieStatic;

    removeCookie(name: string): boolean;
    removeCookie(name: string, options: JQueryCookieOptions): boolean;
}

declare const jQuery: JQueryStatic;
declare const $: JQueryStatic;