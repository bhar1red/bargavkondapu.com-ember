import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    var text = "<h3> Philosophy </h3>"
    +"<p> I am heavily inspired from the works of Napoleon Hill, Charles Bukowski, Tony Robbins, Simon Sinek, Gary Vaynerchuk."+" My philosophy can be summarized in these 5 quotes. </p>"
    + "<p> <b> 1 > 0 </b> - Gary Vee <br/>"
    + "<b> Invent yourself and then reinvent yourself </b> - Charles Bukowski<br/>"
    + "<b> People don’t buy WHAT you do, they buy WHY you do it. </b> - Simon Sinek<br/>"
    + "<b> Learn the almost forgotten art of asking questions and then listening to their answers </b> - Napoleon Hill<br/>"
    + "<b> It is literally true that you can succeed best and quickest by helping others to succeed. </b> - Napoleon Hill</p>"
    + "<p> Though our philosophy keep updating everyday, as life progress and with numerous interactions we have, it is reflected in my work and life. Most of my blog-posts share detailed description of things I believe in.</p>"
    + "<h3> Activities and Interests </h3>"
    + "<p> - Love jeeps and slow driving, exploring new places. <br/>"
    + " - Interested in photography - capturing candid expressions and crucial moments. <br/>"
    + " - Like mixing philosophy, mythology, movies, cartoons, technology and everyday life. <br/>"
    + " - Always up for discussion over a beer! </p>"
    + "<h3> Technical </h3>"
    + "<p> For more than 6 years, I have been building highly scalable and robust websites."
    + " My work has been mostly on writing API's and developing custom modules for Drupal. Though PHP is my preferred programming language, I believe in programming concepts and principles more than the language itself."
    + " I love learning about all the aspects involved with developing a websites and hence, familiar with frontend, configuring servers, writing build scripts."
    + " My Master's in Information Security made me realize that majority of security vulnerabilities can be prevented by simple secure coding practices and so, most of my work adhere to secure coding practices. </p>"
    + "<a href='/BargavKondapu_Resume.pdf'> Click here </a> for my Resume";

    return text;
  }
});
