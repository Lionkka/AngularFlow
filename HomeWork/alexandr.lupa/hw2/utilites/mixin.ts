// great Mix which I saw in alexandr.rezenkov's work
// will be implemented later, so as not infringe copyrights ;-)
export default function Mix(...mixins: any[]) {
  return function (base) {
      mixins.forEach(mixin => {
          Object.getOwnPropertyNames(mixin.prototype).forEach(name => {
              base.prototype[name] = mixin.prototype[name];
          });
      });
  }
}