import Ember from 'ember';

export default Ember.Route.extend( {
  model() {
    return this.store.findAll('book');
  },

  actions: {
    saveBook(params) {
      var newBook = this.store.createRecord('book', params);
      newBook.save();
      this.transitionTo('index');
    },

    destroyBook(book) {
      book.destroyRecord();
      this.transitionTo('index');
    },

    update(book, params) {
      Object.keys(params).forEach(function(key) {
        if(params[key]!==undefined) {
          book.set(key,params[key]);
        }
      });
      book.save();
      this.transitionTo('index');
    },
  }
});
