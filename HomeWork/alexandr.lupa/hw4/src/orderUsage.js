var Order = require('./order');

var order = new Order();

order.addItem(50);
order.addItem(150);

order.countTotal(5).then(res => {
  console.log('Total: ' + res);
});