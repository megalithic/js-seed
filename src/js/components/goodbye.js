/** @jsx React.DOM */

var React = require('react');

var Goodbye = React.createClass({
  render: function() {
    return (
      <div>
        <h2>{this.props.name}</h2>
      </div>
    );
  }
});

module.exports = Goodbye;
