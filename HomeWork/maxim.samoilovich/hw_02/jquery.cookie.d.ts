export interface jQueryCookie {}

declare let pluses: string;

declare function encode(s: string): string;

declare function decode(s: string): string;

declare function stringifyCookieValue(value: object | string): string;

declare function parseCookieValue(s: string): object | string;

declare function read(s: string, converter: object): object;

declare function config(key: string | object, value: object, options: object): string;

//function $.removeCookie(); // no any thoughts

export as namespace $;