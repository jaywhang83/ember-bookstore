import Ember from 'ember';

export default Ember.Component.extend({
  addNewBook: false,

  actions: {
    bookFormShow() {
      this.set('addNewBook', true);
    },

    saveBook() {
      var params = {
        title: this.get('title'),
        author: this.get('author'),
        description: this.get('description'),
        price: parseInt(this.get('price')) ? parseInt(this.get('price')) : 0
      };
      this.set('addNewBook', false);
      this.sendAction('saveBook', params);
    }
   }
});
