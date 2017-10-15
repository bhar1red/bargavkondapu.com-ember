import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  host: 'http://bargavkondapu.dd:8083',
  namespace: 'api/v1'
});
