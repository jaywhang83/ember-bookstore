import Ember from 'ember';

export default Ember.Component.extend({
  shoppingCart: Ember.inject.service(),

  actions: {
    addToCart(book) {
      this.get('shoppingCart').add(book);
    }
  }
});
