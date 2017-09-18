export class Order {
  calculateTax (tax) {
    const total = this.items.reduce((r, i) => {
      return r += i
    })
    return total + (total / 100) * tax
  }

  checkTaxRange (tax) {
    return tax > 100 || tax < 0
  }

  addItem (item) {
    this.items.push(item)
  }

  countTotal (tax) {
    if (this.checkTaxRange(tax)) {
      throw new Error(`Invalid tax range ${tax}`)
    }
    return this.calculateTax(tax)
  }
  countTotalAsync (tax) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (this.checkTaxRange(tax)) {
          reject(`Invalid tax range ${tax}`)
        }
        resolve(this.calculateTax(tax))
      }, 2000)
    })
  }
}
