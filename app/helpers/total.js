import Ember from 'ember';

export function total(params) {
  var totalPrice = params[0];
  var orderTotal = 0;
  console.log("price",totalPrice);
  totalPrice.forEach(function(price) {
    orderTotal+=price.get('price');
  });
  return "$"+orderTotal.toFixed(2);
}

export default Ember.Helper.helper(total);
