function valueOf(value: any): object {
  return Object.prototype.valueOf.call(value)
}

export default valueOf
