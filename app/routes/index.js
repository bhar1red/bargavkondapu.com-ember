import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    var text = "<p> Hi! I am Bargav and I am in a constant pursuit of fulfillment. I feel fulfilled by sharing knowledge and inspiration with others. I feel fulfilled by having deep conversations with people. </p> "+
               "<p> Being grown up with technology, writing code and developing websites is one of the most fulfilling activities for me. I help organizations establish their digital presence and be able to share their thoughts across internet.</p>"+
               "<p> email: bhar1red@gmail.com <br/> <a href='https://www.facebook.com/bhar1red' target='_blank'>facebook</a> | <a href='https://www.linkedin.com/in/bhar1red/' target='_blank'>linkedIn</a> | <a href='https://github.com/bhar1red' target='_blank'>github</a> </p>";
    return text;
  }
});
