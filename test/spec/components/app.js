/** @jsx React.DOM */

jest.dontMock('../../../src/js/components/app.js');

describe('Main', function () {
  var App, component, React, TestUtils;

  beforeEach(function () {
    React = require('react/addons');
    TestUtils = React.addons.TestUtils;
    App = require('../../../src/js/components/app.js');
    component = TestUtils.renderIntoDocument(App());
  });

  it('should create a new instance of App', function () {
    expect(component).toBeDefined();
  });
});
