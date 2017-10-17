import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    var posts = this.store.findAll('post', {reload: true}).then(posts => posts);
    return posts;
  }
});
