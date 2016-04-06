import Ember from 'ember';

export default Ember.Component.extend({
  updateBookForm: false,
  actions: {
    delete(book) {
      if(confirm('Are you sure you want to delete this book?')) {
        this.sendAction('destroyBook', book);
      }
    },
    update(book, params) {
      this.sendAction('update', book, params);
    },
  }
});
