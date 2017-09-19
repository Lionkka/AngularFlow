declare interface CookieOptions {
    expires?: number;
    path: string;
    domain?: string;
    secure?: boolean;

}

declare namespace JqueryCookie {
    export const raw: boolean;
    export const json: boolean;
    function cookie(name: string): any;
    function cookie(name: string, val: any): any;
    function cookie(name: string, val: string, options: CookieOptions): any;
    function cookie(name: string, conv: () => any): any;

    function removeCookie(name: string): any;
    function removeCookie(name: string, options: CookieOptions): any;
}