import Ember from 'ember';

export default Ember.Route.extend({
  model(params){

    var json = {
      data: [{ id:'1', title:'Drupal Migrate Taxonomy To Groups', slug:'drupal-migrate-taxonomy-to-groups', weight:'', category:"module", attributes: {image:"project1.jpg", description:"project 1 description", url:""}},
        { id:'2', title:'Haveli Bistro', slug:'Haveli Bistro', weight:'', category:"website", attributes: {image:"project2.jpg", description:"project 2 description", url:"www.havelibistro.com"}},
        { id:'3', title:'Haveli Bistro', slug:'Haveli Bistro', weight:'', category:"website", attributes: {image:"project2.jpg", description:"project 2 description", url:"www.havelibistro.com"}},
        { id:'4', title:'Haveli Bistro', slug:'Haveli Bistro', weight:'', category:"website", attributes: {image:"project2.jpg", description:"project 2 description", url:"www.havelibistro.com"}},
        { id:'5', title:'Haveli Bistro', slug:'Haveli Bistro', weight:'', category:"website", attributes: {image:"project2.jpg", description:"project 2 description", url:"www.havelibistro.com"}},
        { id:'6', title:'Haveli Bistro', slug:'Haveli Bistro', weight:'', category:"website", attributes: {image:"project2.jpg", description:"project 2 description", url:"www.havelibistro.com"}}]
    };
    console.log(params);
    /*json.data.forEach(function(item)){
      if(item.id == 3){
        return item;
      }
    }*/
    console.log(json.data);
    var it = [];
    json.data.forEach(function(item){
      console.log(item.id);
      if(item.id == params.project_id){
        console.log('success');
        it = item;
      }
    });
    return it;
  //  return json.data;
  //  return params;
    //return json;
  }
});
