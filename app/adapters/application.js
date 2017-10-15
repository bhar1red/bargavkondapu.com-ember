import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  host: 'http://ec2-34-231-236-238.compute-1.amazonaws.com',
  namespace: 'api/v1'
});
