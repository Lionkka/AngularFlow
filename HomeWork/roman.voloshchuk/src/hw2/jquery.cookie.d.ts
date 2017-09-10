declare namespace $ {
    interface jqueryCookieOptions {
        expires?:Date|number;
        path?:string;
        domain?:string;
        secure?:boolean
    }

    function cookie(key:string, value:any, options?: jqueryCookieOptions):boolean|object|undefined;

    function removeCookie(key:string, options: object):boolean;
}