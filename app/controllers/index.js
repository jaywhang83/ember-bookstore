import Ember from 'ember';

export default Ember.Controller.extend({
  isModalShown: false,

  actions: {
    /**
     * In this case, I'm using a single action to both
     * open and "cancel" the modal
     */
    toggleModal() {
      this.toggleProperty('isModalShown');
    },
    /**
     * And here I do something a little different
     * when the user presses the "agree" button in the modal
     */
    agree() {
      alert('Thanks for agreeing!');
      this.set('isModalShown', false);
    }
  }
});
