const prod = 'This is production!';
const dev = 'This is developer env';

console.log('Running app version - ' + version + '. Env - ' + ENV);

if(!BROWSER_SUPPORT_HTML5){
    console.log('Browser does not support html5');
}