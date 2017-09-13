import $ from 'jquery';

// read all cookies
$.cookie();

// set cookie
$.cookie('cookie1', 'cookie1', {
  path: '/'
});

// read cookie by name
$.cookie('cookie1');

// remove cookie by name
$.removeCookie('cookie1')