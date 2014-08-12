/** @jsx React.DOM */

'use strict';

var React = require('react/addons');
var ReactTransitionGroup = React.addons.TransitionGroup;

// Export React so the devtools can find it
(window !== window.top ? window.top : window).React = React;

// CSS, TODO: can include compontent specific CSS here
// require('../../styles/reset.css');
// require('../../styles/main.css');

var App = React.createClass({
  render: function () {
    var toolingList = this.props.tooling.map(function(tool, i) {
      return <li key={tool.id}>{tool.id}. {tool.text}</li>
    });
    return (
      <div>
        <h2>{this.props.title}</h2>
        <ul> {toolingList} </ul>
      </div>
    );
  }
});

module.exports = App;
