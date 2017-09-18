interface jQuery {
  cookie(): object;
  cookie(key: string): string;
  cookie(key: string, value: string, options?: CookieOptions): void;

  removeCookie(key: string, options?: CookieOptions): boolean;
}

interface CookieOptions {
  expires? : number;
  path?    : string;
  domain?  : string;
  secure?  : boolean;
}
