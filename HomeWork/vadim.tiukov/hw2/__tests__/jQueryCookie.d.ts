// It's not runnable. But can cause error during compilation if declaration is wrong

import jQuery from "../jQueryCookie";

let options = {
  path: "/",
} as jQuery.CookiesOptions;

jQuery.cookie("string");

jQuery.json = true;
jQuery.raw = true;

jQuery.cookie("username", "anon", options);
jQuery.removeCookie("username", options);

// Error
jQuery.cookie(1123);
