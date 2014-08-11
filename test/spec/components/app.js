/** @jsx React.DOM */

'use strict';

describe('Main', function () {
  var App, component;

  beforeEach(function () {
    var container = document.createElement('div');
    container.id = 'main';
    document.body.appendChild(container);

    App = require('../../../src/js/components/app.js');
    console.log("App is", App);
    component = App();
  });

  it('should create a new instance of App', function () {
    expect(component).toBeDefined();
  });
});


// var ReactTestUtils;
//
// describe("Main",function(){
//   beforeEach(function() {
//     ReactTestUtils = React.addons.ReactTestUtils;
//   });
//
//   it("Check Text Assignment", function () {
//     var label = <Label>Some Text We Need for Test</Label>;
//     ReactTestUtils.renderIntoDocument(label);
//     expect(label.refs.p).toBeDefined();
//     expect(label.refs.p.props.children).toBe("Some Text We Need for Test");
//   });
//
//   it("Click", function () {
//     var label  = <Label>Some Text We Need to Test</Label>;
//     ReactTestUtils.renderIntoDocument(label);
//
//     ReactTestUtils.Simulate.click(label.refs.p);
//     expect(label.refs.p.props.children).toBe("Text After Click");
//   });
// });
