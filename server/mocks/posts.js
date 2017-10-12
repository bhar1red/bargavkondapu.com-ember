/* eslint-env node */
'use strict';

var posts = [{ id:'1', title:'Drupal Migrate Taxonomy To Groups', slug:'drupal-migrate-taxonomy-to-groups', weight:'', category:"module", attributes: {image:"project1.jpg", description:"project 1 description", url:""}},
{ id:'2', title:'Haveli Bistro', slug:'haveli-bistro', weight:'', category:"website", attributes: {image:"project2.jpg", description:"project 2 description", url:"www.havelibistro.com"}},
{ id:'3', title:'American Institute Of Architects', slug:'american-institute-of-architects', weight:'', category:"website", attributes: {image:"project2.jpg", description:"project 2 description", url:"www.havelibistro.com"}},
{ id:'4', title:'Haveli Bistro', slug:'Haveli Bistro', weight:'', category:"website", attributes: {image:"project2.jpg", description:"project 2 description", url:"www.havelibistro.com"}},
{ id:'5', title:'Haveli Bistro', slug:'Haveli Bistro', weight:'', category:"website", attributes: {image:"project2.jpg", description:"project 2 description", url:"www.havelibistro.com"}},
{ id:'6', title:'Haveli Bistro', slug:'Haveli Bistro', weight:'', category:"website", attributes: {image:"project2.jpg", description:"project 2 description", url:"www.havelibistro.com"}}]

module.exports = function(app) {
  const express = require('express');
  let postsRouter = express.Router();

  postsRouter.get('/', function(req, res) {
    if(req.query.slug != null){
      var it = [];
      posts.forEach(function(post){
        if(post.slug == req.query.slug){
          it = post;
        }
      });
      res.send({
        'post': it
      });
    }
    else{
      res.send({
        'posts': posts
      });
    }
  });

  postsRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  postsRouter.get('/:id', function(req, res) {
    res.send({
      'posts': {
        id: req.params.id
      }
    });
  });

  postsRouter.put('/:id', function(req, res) {
    res.send({
      'posts': {
        id: req.params.id
      }
    });
  });

  postsRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  // The POST and PUT call will not contain a request body
  // because the body-parser is not included by default.
  // To use req.body, run:

  //    npm install --save-dev body-parser

  // After installing, you need to `use` the body-parser for
  // this mock uncommenting the following line:
  //
  //app.use('/api/posts', require('body-parser').json());
  app.use('/api/posts', postsRouter);
};
