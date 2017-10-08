import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return {
      data: [{ id:'1', title:'Drupal Migrate Taxonomy To Groups', slug:'drupal-migrate-taxonomy-to-groups', weight:'', category:"module", attributes: {image:"project1.jpg", description:"project 1 description", url:""}},
        { id:'2', title:'Haveli Bistro', slug:'haveli-bistro', weight:'', category:"website", attributes: {image:"project2.jpg", description:"project 2 description", url:"www.havelibistro.com"}},
        { id:'3', title:'American Institute Of Architects', slug:'american-institute-of-architects', weight:'', category:"website", attributes: {image:"project2.jpg", description:"project 2 description", url:"www.havelibistro.com"}},
        { id:'4', title:'Haveli Bistro', slug:'Haveli Bistro', weight:'', category:"website", attributes: {image:"project2.jpg", description:"project 2 description", url:"www.havelibistro.com"}},
        { id:'5', title:'Haveli Bistro', slug:'Haveli Bistro', weight:'', category:"website", attributes: {image:"project2.jpg", description:"project 2 description", url:"www.havelibistro.com"}},
        { id:'6', title:'Haveli Bistro', slug:'Haveli Bistro', weight:'', category:"website", attributes: {image:"project2.jpg", description:"project 2 description", url:"www.havelibistro.com"}}]
    };
  }
});
