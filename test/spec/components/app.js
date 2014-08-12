/** @jsx React.DOM */

jest.dontMock('../../../src/js/components/app.js');

describe('Main', function () {
  var App, component;

  beforeEach(function () {
    var React = require('react/addons');
    var TestUtils = React.addons.TestUtils;
    App = require('../../../src/js/components/app.js');
    component = TestUtils.renderIntoDocument(App({tooling: [], title: "Test Title"}));
  });

  it('should create a new instance of App', function () {
    expect(component).toBeDefined();
  });
});
