// SZ return type of this function should be boolean.
function valueOf(value: any): object {
  return Object.prototype.valueOf.call(value);
}

export default valueOf;
