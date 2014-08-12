/** @jsx React.DOM */

'use strict';

var App = require('./components/app');
var React = require('react');

var propsToInitWith = {
  title: "Gulp starter kit tooling",
  tooling: [
    {id: 1, text: 'Browserify-shim'},
    {id: 2, text: 'Browserify / Watchify'},
    {id: 3, text: 'React'},
    {id: 4, text: 'Compass'},
    {id: 5, text: 'SASS'},
    {id: 6, text: 'Image optimization'},
    {id: 7, text: 'LiveReload'},
    {id: 8, text: 'Non common-js jquery plugin'},
    {id: 9, text: 'Npm jquery'},
    {id: 10, text: 'Npm react'},
    {id: 11, text: 'Npm es6'},
    {id: 12, text: 'Jest for testing'}
  ]
};

React.renderComponent(App(propsToInitWith), document.getElementById('main'));
