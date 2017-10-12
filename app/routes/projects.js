import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    var projects = this.store.findAll('project', {reload: true}).then(projects => projects.sortBy('id'));
//    var p = projects.sortBy('id');
    return projects;
  }
});
