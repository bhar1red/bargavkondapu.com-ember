/* eslint-env node */
'use strict';

module.exports = function(app) {
  const express = require('express');
  let projectsRouter = express.Router();

  projectsRouter.get('/', function(req, res) {
    res.send({
      'projects': [{ id:'1', title:'Drupal Migrate Taxonomy To Groups', slug:'drupal-migrate-taxonomy-to-groups', weight:'', category:"module", attributes: {image:"project1.jpg", description:"project 1 description", url:""}},
        { id:'2', title:'Haveli Bistro', slug:'haveli-bistro', weight:'', category:"website", attributes: {image:"project2.jpg", description:"project 2 description", url:"www.havelibistro.com"}},
        { id:'3', title:'American Institute Of Architects', slug:'american-institute-of-architects', weight:'', category:"website", attributes: {image:"project2.jpg", description:"project 2 description", url:"www.havelibistro.com"}},
        { id:'4', title:'Haveli Bistro', slug:'Haveli Bistro', weight:'', category:"website", attributes: {image:"project2.jpg", description:"project 2 description", url:"www.havelibistro.com"}},
        { id:'5', title:'Haveli Bistro', slug:'Haveli Bistro', weight:'', category:"website", attributes: {image:"project2.jpg", description:"project 2 description", url:"www.havelibistro.com"}},
        { id:'6', title:'Haveli Bistro', slug:'Haveli Bistro', weight:'', category:"website", attributes: {image:"project2.jpg", description:"project 2 description", url:"www.havelibistro.com"}}]
    });
  });

  projectsRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  projectsRouter.get('/:id', function(req, res) {
    res.send({
      'projects': {
        id: req.params.id
      }
    });
  });

  projectsRouter.put('/:id', function(req, res) {
    res.send({
      'projects': {
        id: req.params.id
      }
    });
  });

  projectsRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  // The POST and PUT call will not contain a request body
  // because the body-parser is not included by default.
  // To use req.body, run:

  //    npm install --save-dev body-parser

  // After installing, you need to `use` the body-parser for
  // this mock uncommenting the following line:
  //
  //app.use('/api/projects', require('body-parser').json());
  app.use('/api/projects', projectsRouter);
};
