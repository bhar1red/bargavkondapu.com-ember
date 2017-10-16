import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    var text = "<p> I am Bargav and I am in a constant pursuit of fulfillment. I feel fulfilled by sharing knowledge and inspiration with others. I feel fulfilled by having deep conversations with people. </p> <p> Being grown up with technology, writing code and developing websites is one of the most fulfilling activities for me. I help organizations establish their digital presence and be able to share their thoughts across internet.</p>";
    return text;
  }
});
