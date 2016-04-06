import Ember from 'ember';

export default Ember.Route.extend( {
  model() {
    return this.store.findAll('book');
  },

  actions: {
    destroyBook(book) {
      book.destroyRecord();
      this.transitionTo('index');
    }
  }
});
