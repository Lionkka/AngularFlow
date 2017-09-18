import { Order } from './order'

const newOrder = new Order()
newOrder.addItem(2)
newOrder.addItem(3)
const total = newOrder.countTotal(4)

console.log(total)
