/** @jsx React.DOM */

var React = require('react');
// var Table = require('./table');

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
