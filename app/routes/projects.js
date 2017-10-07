import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return {
      data: [{ id:'p1', type:"project", attributes: {image:"project1.jpg", description:"project 1 description"}},
        { id:"p2",type:"project", attributes: {image: "project2.jpg", description: "project 2 description"}}]
    };
  }
});
