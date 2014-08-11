/** @jsx React.DOM */

'use strict';

describe('Main', function () {
  var App, component;

  beforeEach(function () {
    var container = document.createElement('div');
    container.id = 'main';
    document.body.appendChild(container);
    console.log("document is", document);

    App = require('../../../src/js/components/app.js');
    component = App();
  });

  it('should create a new instance of App', function () {
    expect(component).toBeDefined();
  });
});
