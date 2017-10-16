import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    var text = "<h3> Philosophy : </h3>"+"<p> I am heavily inspired from the works of Napoleon Hill, Charles Bukowski, Tony Robbins, Simon Sinek, Gary Vaynerchuk."+" My philosophy can be summarized in these 5 quotes. </p>"
    + "<p> <b> 1 > 0 </b> - Gary Vee <br/>"
    + "<b> Invent yourself and then reinvent yourself </b> - Charles Bukowski<br/>"
    + "<b> People don’t buy WHAT you do, they buy WHY you do it. </b> - Simon Sinek<br/>"
    + "<b> Learn the almost forgotten art of asking questions and then listening to their answers </b> - Napoleon Hill<br/>"
    + "<b> It is literally true that you can succeed best and quickest by helping others to succeed. </b> - Napoleon Hill</p>"

    +"<p> Though our philosophy keep updating everyday, as life progress and with numerous interactions we have, it is reflected in my work and life. Most of my blog-posts share detailed description of things I believe in.</p>";
    return text;
  }
});
