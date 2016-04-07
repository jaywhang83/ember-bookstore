import Ember from 'ember';

export default Ember.Component.extend({
  updateBookForm: false,

  actions: {
    updateBookForm() {
      this.set('updateBookForm', true);
    },

    update(book) {
      var params = {
        title: this.get('title'),
        author: this.get('author'),
        description: this.get('description'),
        price: this.get('price', {defaultValue: 'price'}),
        image: this.get('image')
      };
      this.set('updateBookForm', false);
      this.sendAction('update', book, params);
    },

    formHide(){
      this.set('updateBookForm', false);
    }
   }
});
