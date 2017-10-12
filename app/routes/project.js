import Ember from 'ember';

export default Ember.Route.extend({
  model(params){
    return this.store.queryRecord('project', {slug: params.slug});
  }
});
