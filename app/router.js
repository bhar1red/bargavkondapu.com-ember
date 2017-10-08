import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('about');
  this.route('projects');
  this.route('project', {path: '/project/:project_id'});
  this.route('blog');
});

export default Router;
