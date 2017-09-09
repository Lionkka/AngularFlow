// Type definitions for jquery.cookie
// A simple, lightweight jQuery plugin for reading, writing and deleting cookies.
// Source: https://github.com/carhartl/jquery-cookie

declare namespace jquery {
  interface CookiesConfiguration {
    raw?: boolean;
    json?: boolean;
  }

  interface CookiesOptions {
    expires?: number | Date;
    path?: string;
    domain?: string;
    secure?: boolean;
  }

  export interface JQueryStatic extends CookiesConfiguration {
    cookie(key: string, value?: any, options?: CookiesOptions): any|void;
    removeCookie(key: string, options?: CookiesOptions): boolean;
  }
}

declare const jquery: jquery.JQueryStatic;

export = jquery;
export as namespace jquery;
