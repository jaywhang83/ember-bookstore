import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('about');
  this.route('contact');
  this.route('book', {path: '/book/:book_id'});
  this.route('admin');
  this.route('cart');
  this.route('sign-up');
  this.route('sign-in');
  this.authenticatedRoute('welcome');
});

export default Router;
