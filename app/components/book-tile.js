import Ember from 'ember';

export default Ember.Component.extend({
  delete(book) {
    if(confirm('Are you sure you want to delete this book?')) {
      this.sendAction('destroyBook', book);
    }
  }
});
